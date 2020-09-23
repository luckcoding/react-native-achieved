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

const IconRedpacketFill: FunctionComponent<Props> = ({
  size,
  color,
  ...rest
}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M607.84 480.128a22.368 22.368 0 0 1 0 31.68l-64 64-0.224 0.16H608a22.4 22.4 0 0 1 0 44.8h-73.6v51.2H608a22.4 22.4 0 0 1 0 44.8h-73.6v19.2a22.4 22.4 0 1 1-44.8 0v-19.2H416a22.4 22.4 0 1 1 0-44.8h73.6v-51.2H416a22.4 22.4 0 1 1 0-44.8h64.384l-0.224-0.16-64-64a22.368 22.368 0 1 1 31.68-31.68l64 64 0.16 0.224 0.16-0.224 64-64a22.4 22.4 0 0 1 31.68 0M512 408.384c-14.976 0-29.952-2.688-42.208-8.128l-277.76-123.68v555.328A64 64 0 0 0 255.744 896h512.448A64 64 0 0 0 832 831.904V274.784l-277.824 125.44c-12.16 5.44-27.168 8.16-42.176 8.16"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M768.224 128H255.776A64 64 0 0 0 192 192.064v14.464l303.776 135.232c7.872 3.52 24.576 3.52 32.416 0L832 204.608v-12.544A64 64 0 0 0 768.224 128"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconRedpacketFill.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconRedpacketFill) : IconRedpacketFill;
