/* tslint:disable */
/* eslint-disable */

import React, {FunctionComponent} from 'react';
import {ViewProps} from 'react-native';
import {Svg, GProps, Path} from 'react-native-svg';
import {getIconColor} from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

const IconGroup: FunctionComponent<Props> = ({size, color, ...rest}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M864 844.768a2.464 2.464 0 0 1-1.504 0.704L288 844.096V726.08c0-5.824 6.016-14.944 12.096-17.44C301.664 708 456.992 640 576 640c118.752 0 274.336 68 276.864 69.088 5.216 2.08 11.136 11.168 11.136 17.024v118.656zM480.48 440.8v-104.736A112.064 112.064 0 0 1 592.256 224 112 112 0 0 1 704 336.064v104.736a112 112 0 0 1-111.744 112.064 112 112 0 0 1-111.776-112.064z m397.248 209.28c-4.992-2.176-92.64-40.384-191.008-61.056A176 176 0 0 0 768 440.8v-104.736C768 238.976 689.152 160 592.256 160c-96.928 0-175.776 78.976-175.776 176.064v104.736c0 59.136 29.344 111.456 74.112 143.36-108.16 18.72-210.752 63.488-215.552 65.6C245.952 661.76 224 694.56 224 726.144v126.4h0.544a65.536 65.536 0 0 0 64.96 56.96h572.992c28.672 0 54.304-18.752 63.808-46.72l1.696-4.96V726.08c0-31.808-22.016-64.672-50.272-76z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M360.384 573.44c1.024 0 1.952 0.288 2.976 0.288a32 32 0 1 0 0-64A68.736 68.736 0 0 1 294.72 440.96v-84.256C294.72 318.848 325.504 288 363.36 288a32 32 0 0 0 0-64 132.832 132.832 0 0 0-132.64 132.736v84.256c0 32.736 12.352 62.368 32.064 85.536-62.72 19.296-117.536 49.696-127.584 55.456C112.352 592.8 96 618.688 96 644.448v91.904a32 32 0 1 0 64 0v-91.744a11.424 11.424 0 0 1 2.336-4.672 28.992 28.992 0 0 0 3.584-1.824c30.432-17.728 123.84-63.712 189.76-63.712 1.632 0 3.104-0.704 4.704-0.96"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconGroup.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconGroup) : IconGroup;