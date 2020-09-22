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

const IconRedpacket: FunctionComponent<Props> = ({size, color, ...rest}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M256 831.936V305.216l213.792 95.04c12.224 5.44 27.2 8.16 42.208 8.16 14.976 0 29.952-2.72 42.176-8.128l213.856-95.04 0.16 526.72L256 831.968zM768 192.096V235.2l-239.808 106.56c-7.872 3.52-24.544 3.52-32.384 0L256 235.2V192.096L255.776 192 768 192.096zM768.192 128H255.776A64 64 0 0 0 192 192.096v639.84A64 64 0 0 0 255.776 896h512.416A64 64 0 0 0 832 831.936V192.096A64.032 64.032 0 0 0 768.192 128z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M608 620.8a22.4 22.4 0 1 0 0-44.8h-64.352l0.192-0.16 64-64a22.368 22.368 0 1 0-31.68-31.68l-64 64-0.16 0.224-0.16-0.224-64-64a22.4 22.4 0 0 0-31.68 31.68l64 64 0.192 0.16H416a22.4 22.4 0 1 0 0 44.8h73.6V672H416a22.4 22.4 0 1 0 0 44.8h73.6v19.2a22.4 22.4 0 1 0 44.8 0v-19.2H608a22.4 22.4 0 1 0 0-44.8h-73.6v-51.2H608z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconRedpacket.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconRedpacket) : IconRedpacket;
