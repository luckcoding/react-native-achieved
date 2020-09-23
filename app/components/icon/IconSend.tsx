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

const IconSend: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M832 576a32 32 0 0 0-32 32l0.256 192L224 800.256 223.744 224H416a32 32 0 0 0 0-64H223.744A63.84 63.84 0 0 0 160 223.744v576.512C160 835.392 188.608 864 223.744 864h576.512A63.84 63.84 0 0 0 864 800.256V608a32 32 0 0 0-32-32"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M800.544 160H640a32 32 0 0 0 0 64l114.944-0.192-265.6 265.568a32 32 0 0 0 45.28 45.248l265.664-265.632v115.264a32 32 0 1 0 64 0V223.744A63.84 63.84 0 0 0 800.544 160"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconSend.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconSend) : IconSend;
