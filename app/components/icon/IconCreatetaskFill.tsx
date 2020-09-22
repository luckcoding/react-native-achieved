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

const IconCreatetaskFill: FunctionComponent<Props> = ({
  size,
  color,
  ...rest
}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M680.608 384h-224a32 32 0 1 1 0-64h224a32 32 0 1 1 0 64m0 160h-224a32 32 0 1 1 0-64h224a32 32 0 1 1 0 64m0 160h-224a32 32 0 1 1 0-64h224a32 32 0 1 1 0 64m-328.64-320a32 32 0 1 1 0-64 32 32 0 0 1 0 64m0 160a32.032 32.032 0 0 1 0-64 32 32 0 0 1 0 64m0 160a32.032 32.032 0 0 1 0-64 32 32 0 0 1 0 64M799.872 160H223.68A63.776 63.776 0 0 0 160 223.744v576.512C160 835.392 188.608 864 223.776 864h576.512a63.776 63.776 0 0 0 63.68-63.744V223.744A64 64 0 0 0 799.872 160"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconCreatetaskFill.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconCreatetaskFill) : IconCreatetaskFill;
