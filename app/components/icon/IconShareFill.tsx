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

const IconShareFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M736 608a127.776 127.776 0 0 0-115.232 73.28l-204.896-117.056a30.848 30.848 0 0 0-9.696-3.2A127.68 127.68 0 0 0 416 512c0-6.656-0.992-13.088-1.984-19.456 0.608-0.32 1.28-0.416 1.856-0.768l219.616-125.472A127.328 127.328 0 0 0 736 416c70.592 0 128-57.408 128-128s-57.408-128-128-128-128 57.408-128 128c0 6.72 0.992 13.152 1.984 19.616-0.608 0.288-1.28 0.256-1.856 0.608l-219.616 125.472A127.328 127.328 0 0 0 288 384c-70.592 0-128 57.408-128 128s57.408 128 128 128a126.912 126.912 0 0 0 84.544-32.64 31.232 31.232 0 0 0 11.584 12.416l224 128c0.352 0.224 0.736 0.256 1.12 0.448C615.488 812.992 669.6 864 736 864c70.592 0 128-57.408 128-128s-57.408-128-128-128"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconShareFill.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconShareFill) : IconShareFill;
