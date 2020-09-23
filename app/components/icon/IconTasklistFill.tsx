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

const IconTasklistFill: FunctionComponent<Props> = ({
  size,
  color,
  ...rest
}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M567.104 512c-11.104 19.04-31.488 32-55.104 32a63.68 63.68 0 0 1-55.072-32h110.176zM384 256h256V192h-256v64z m447.936 0H704V170.624C704 150.016 687.232 128 640.16 128h-256.288C336.8 128 320 150.016 320 170.624V256H192.096A64.128 64.128 0 0 0 128 320v129.536h768V320c0-35.296-28.736-64-64.064-64z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M831.968 510.464c-2.496 0.64-4.896 1.536-7.584 1.536h-188.928c-14.304 55.04-63.968 96-123.456 96-59.456 0-109.12-40.96-123.456-96H128v288c0 35.296 28.768 64 64.096 64h639.84A64.096 64.096 0 0 0 896 800v-288h-64.032v-1.536z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconTasklistFill.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconTasklistFill) : IconTasklistFill;
