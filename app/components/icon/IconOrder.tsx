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

const IconOrder: FunctionComponent<Props> = ({size, color, ...rest}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M224 831.936V192.096L223.744 192 800 192.096 800.256 832 224 831.936zM800.256 128H223.744A64 64 0 0 0 160 192.096v639.84A64 64 0 0 0 223.744 896h576.512A64 64 0 0 0 864 831.936V192.096A64 64 0 0 0 800.256 128z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M640 416h-256a32 32 0 0 0 0 64h256a32 32 0 0 0 0-64M640 576h-256a32 32 0 0 0 0 64h256a32 32 0 0 0 0-64"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconOrder.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconOrder) : IconOrder;
