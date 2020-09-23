/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

const IconGroupFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M877.728 650.112c-4.992-2.208-92.64-40.416-191.04-61.088A176 176 0 0 0 768 440.8v-104.736C768 238.976 689.184 160 592.288 160a175.168 175.168 0 0 0-131.584 59.712 175.424 175.424 0 0 0-44.192 116.352v104.736c0 59.136 29.344 111.456 74.112 143.392-108.16 18.688-210.752 63.456-215.552 65.6C245.92 661.728 224 694.528 224 726.112v126.4h0.544a65.536 65.536 0 0 0 64.96 56.96h572.992c28.672 0 54.304-18.752 63.808-46.688l1.696-4.992v-131.68c0-31.808-22.016-64.672-50.272-76"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M322.432 577.888c34.976-10.912 51.552-17.024 51.552-17.024s22.656-9.984 16.672-29.984c-14.016-26.688-24-47.36-24-125.344V304.192s6.016-49.312 24.992-53.984c1.536-1.632 1.792-4.032 1.12-6.72a31.936 31.936 0 0 0-29.408-19.52 132.832 132.832 0 0 0-132.64 132.768v84.256c0 32.736 12.352 62.368 32.064 85.536-62.72 19.296-117.536 49.696-127.584 55.456C112.352 592.8 96 618.688 96 644.448v91.904a32 32 0 0 0 32 32 31.68 31.68 0 0 0 31.296-28.48c0.128-1.184 0.704-2.272 0.704-3.52v-14.656c2.56-30.304 13.92-85.312 60.992-111.072 7.2-3.2 14.88-6.336 22.72-9.44a2978.88 2978.88 0 0 0 78.72-23.296"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconGroupFill.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconGroupFill) : IconGroupFill;
