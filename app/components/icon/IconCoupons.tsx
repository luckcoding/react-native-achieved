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

const IconCoupons: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M832 668.8l-0.096 99.2L192 768.192V668.8c72.96-14.848 128-79.52 128-156.768a160.288 160.288 0 0 0-128-156.8L192.128 256 832 255.776V355.2a160.32 160.32 0 0 0-128 156.8 160.32 160.32 0 0 0 128 156.8m32-252.8h32V255.776A64 64 0 0 0 831.904 192H192.096a64 64 0 0 0-64.128 63.776V416h32c52.96 0 96 43.04 96 96 0 52.928-43.04 96-96 96H128v160.192A64 64 0 0 0 192.064 832h639.84A64 64 0 0 0 896 768.192V608h-32c-52.928 0-96-43.072-96-96 0-52.96 43.072-96 96-96"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M608 524.8a22.4 22.4 0 1 0 0-44.8h-64.384c0.064-0.096 0.16-0.096 0.224-0.16l64-64a22.4 22.4 0 1 0-31.68-31.68l-64 64-0.16 0.224-0.16-0.256-64-64a22.4 22.4 0 0 0-31.68 31.712l64 64c0.064 0.064 0.16 0.064 0.224 0.16H416a22.4 22.4 0 1 0 0 44.8h73.6V576H416a22.4 22.4 0 1 0 0 44.8h73.6v19.2a22.4 22.4 0 0 0 44.8 0v-19.2H608a22.4 22.4 0 1 0 0-44.8h-73.6v-51.2H608z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconCoupons.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconCoupons) : IconCoupons;
