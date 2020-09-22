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

const IconBusinesscard: FunctionComponent<Props> = ({size, color, ...rest}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M736 352h-192a32 32 0 1 0 0 64h192a32 32 0 1 0 0-64M736 480h-128a32 32 0 1 0 0 64h128a32 32 0 1 0 0-64M736 608h-128a32 32 0 1 0 0 64h128a32 32 0 1 0 0-64"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M831.936 768L192 768.224 192.096 256 832 255.776l0.224 512.192-0.32 0.032m0-576H192.128A64.032 64.032 0 0 0 128 255.776v512.448C128 803.36 156.768 832 192.096 832h639.84A64 64 0 0 0 896 768.224V255.776A64 64 0 0 0 831.936 192"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M480 622.144H288v-20.736c20.64-8.32 63.84-23.04 96-23.04 31.744 0 74.656 14.496 96 23.072v20.704zM355.36 441.6c0-14.368 11.232-25.6 25.504-25.6a25.6 25.6 0 0 1 25.504 25.6v41.92a25.28 25.28 0 0 1-25.504 25.632 25.6 25.6 0 0 1-25.504-25.6V441.6z m157.088 104a483.2 483.2 0 0 0-53.664-18.88c7.168-12.864 11.584-27.456 11.584-43.2V441.6c0-49.408-40.16-89.6-89.504-89.6a89.664 89.664 0 0 0-89.504 89.6v41.92c0 16.352 4.736 31.52 12.416 44.736-26.56 8-46.272 16.512-47.296 16.992A53.152 53.152 0 0 0 224 593.6v55.904l1.696 4.992c6.464 18.976 24.032 31.68 43.712 31.68h229.184a45.44 45.44 0 0 0 45.28-42.016L544 593.6c0-20.576-13.28-40.416-31.552-47.968z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </Svg>
  );
};

IconBusinesscard.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconBusinesscard) : IconBusinesscard;
