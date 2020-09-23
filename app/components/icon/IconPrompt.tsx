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

const IconPrompt: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 832c-176.448 0-320-143.552-320-320 0-104.384 50.464-196.928 128-255.392A318.016 318.016 0 0 1 512 192c72.096 0 138.432 24.256 192 64.608 77.536 58.464 128 151.008 128 255.392 0 176.448-143.552 320-320 320m192-652.032A381.216 381.216 0 0 0 512 128c-69.984 0-135.424 19.136-192 51.968C205.408 246.496 128 370.24 128 512c0 211.744 172.256 384 384 384s384-172.256 384-384c0-141.76-77.408-265.504-192-332.032"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M512 416a32 32 0 0 0-32 32v256a32 32 0 0 0 64 0v-256a32 32 0 0 0-32-32M512 288a32 32 0 1 0 0 64 32 32 0 0 0 0-64"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconPrompt.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconPrompt) : IconPrompt;
