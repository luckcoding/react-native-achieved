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

const IconLabel: FunctionComponent<Props> = ({size, color, ...rest}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M796.992 497.696l-333.376 333.44h-0.128L191.904 559.68l333.44-333.44C533.472 225.408 553.6 224 601.28 224c82.24 0 191.68 4 193.824 5.12 4.16 111.296 5.824 236.896 1.92 268.576m62.08-269.76c0-35.2-28.64-63.84-62.656-63.84h-0.064C795.296 164.064 684.704 160 601.28 160c-96.16 0-104.8 4.64-115.2 15.04L146.656 514.464c-24.96 24.96-24.896 65.6 0.16 90.656l271.232 271.232c12.16 12.128 28.256 18.784 45.44 18.784 17.152 0 33.184-6.624 45.184-18.624l339.424-339.424c11.2-11.2 21.76-21.76 10.976-309.152"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M609.376 440.288c-26.464 0-48-21.536-48-48s21.536-48 48-48 48 21.536 48 48-21.536 48-48 48m0-160c-61.76 0-112 50.24-112 112s50.24 112 112 112 112-50.24 112-112-50.24-112-112-112"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconLabel.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconLabel) : IconLabel;
