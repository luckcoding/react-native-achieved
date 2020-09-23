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

const IconOrderFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M640 479.968h-256a32 32 0 0 1 0-64h256a32 32 0 0 1 0 64m0 160h-256a32 32 0 0 1 0-64h256a32 32 0 0 1 0 64M800.256 128H223.744A64 64 0 0 0 160 192.064v639.84A64 64 0 0 0 223.744 896h576.512A64 64 0 0 0 864 831.904V192.064A64 64 0 0 0 800.256 128"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconOrderFill.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconOrderFill) : IconOrderFill;
