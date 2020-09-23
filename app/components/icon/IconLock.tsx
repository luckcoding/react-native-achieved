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

const IconLock: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M224 799.936v-319.84L223.744 480 800 480.096 800.256 800 224 799.936z m170.304-483.328A124.672 124.672 0 0 1 518.72 192a124.704 124.704 0 0 1 124.48 124.608V416h-248.896V316.608zM800.256 416H707.2V316.608A188.736 188.736 0 0 0 518.72 128c-103.904 0-188.416 84.608-188.416 188.608V416h-106.56A64 64 0 0 0 160 480.096v319.84A64 64 0 0 0 223.744 864h576.512A64 64 0 0 0 864 799.936v-319.84A64 64 0 0 0 800.256 416z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M512 544a32 32 0 0 0-32 32v128a32 32 0 0 0 64 0v-128a32 32 0 0 0-32-32"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconLock.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconLock) : IconLock;
