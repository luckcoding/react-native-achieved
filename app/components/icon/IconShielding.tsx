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

const IconShielding: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512.608 768H223.872A31.904 31.904 0 0 1 192 736.16L192.096 256h608.192c17.504 0 31.68 14.432 31.68 32.128v161.856a32 32 0 0 0 64 0V288.128A96 96 0 0 0 800.32 192H192.096A64 64 0 0 0 128 255.776v480.384A96 96 0 0 0 223.872 832h288.736a32 32 0 0 0 0-64"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M416 512H288a32 32 0 0 0 0 64h128a32 32 0 0 0 0-64M416 640H288a32 32 0 0 0 0 64h128a32 32 0 0 0 0-64M544 384H288a32 32 0 0 0 0 64h256a32 32 0 0 0 0-64M768 832c-70.592 0-128-57.408-128-128 0-23.68 6.88-45.568 18.144-64.608l174.464 174.464A126.304 126.304 0 0 1 768 832m0-256c70.592 0 128 57.408 128 128 0 23.68-6.88 45.568-18.144 64.608l-174.464-174.464A126.304 126.304 0 0 1 768 576m0-64c-105.888 0-192 86.112-192 192s86.112 192 192 192 192-86.112 192-192-86.112-192-192-192"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconShielding.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconShielding) : IconShielding;
