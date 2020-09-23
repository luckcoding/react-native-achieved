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

const IconKeyboard: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M224 352h64a32 32 0 0 0 0-64H224a32 32 0 0 0 0 64M224 544h64a32 32 0 0 0 0-64H224a32 32 0 0 0 0 64M384 352h64a32 32 0 0 0 0-64h-64a32 32 0 0 0 0 64M384 544h64a32 32 0 0 0 0-64h-64a32 32 0 0 0 0 64M544 352h64a32 32 0 0 0 0-64h-64a32 32 0 0 0 0 64M704 352h64a32 32 0 0 0 0-64h-64a32 32 0 0 0 0 64M544 544h64a32 32 0 0 0 0-64h-64a32 32 0 0 0 0 64M704 544h64a32 32 0 0 0 0-64h-64a32 32 0 0 0 0 64M779.776 672H224a32 32 0 0 0 0 64h555.776a32 32 0 0 0 0-64"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconKeyboard.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconKeyboard) : IconKeyboard;
