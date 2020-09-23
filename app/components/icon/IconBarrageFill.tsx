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

const IconBarrageFill: FunctionComponent<Props> = ({
  size,
  color,
  ...rest
}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M544 448H288a32 32 0 1 1 0-64h256a32 32 0 1 1 0 64m-288 96a32 32 0 0 1 32-32h128a32 32 0 1 1 0 64H288a32 32 0 0 1-32-32m32 96h128a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64M831.936 192H192.064A64 64 0 0 0 128 255.776v512.448A64 64 0 0 0 192.064 832h639.872A64 64 0 0 0 896 768.224V255.776A64 64 0 0 0 831.936 192"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconBarrageFill.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconBarrageFill) : IconBarrageFill;
