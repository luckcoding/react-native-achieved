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

const IconShieldingFill: FunctionComponent<Props> = ({
  size,
  color,
  ...rest
}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M768 512c-41.408 0-79.68 13.312-111.072 35.68l267.392 267.392A190.752 190.752 0 0 0 960 704c0-105.856-86.112-192-192-192M576 704c0 105.888 86.112 192 192 192 41.408 0 79.68-13.312 111.072-35.68l-267.392-267.392A190.528 190.528 0 0 0 576 704"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M416 576H288a32 32 0 1 1 0-64h128a32 32 0 1 1 0 64m0 128H288a32 32 0 1 1 0-64h128a32 32 0 1 1 0 64M288 384h256a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64m480.48 62.944c46.464 0 89.92 12.512 127.52 34.08V255.776A64 64 0 0 0 831.936 192H192.096A64 64 0 0 0 128 255.776v512.448A64 64 0 0 0 192.096 832H545.824a255.296 255.296 0 0 1-34.4-128 257.088 257.088 0 0 1 257.056-257.056"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconShieldingFill.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconShieldingFill) : IconShieldingFill;
