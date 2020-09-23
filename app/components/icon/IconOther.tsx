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

const IconOther: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M779.776 480h-387.2a32 32 0 0 0 0 64h387.2a32 32 0 0 0 0-64M779.776 672h-387.2a32 32 0 0 0 0 64h387.2a32 32 0 0 0 0-64M256 288a32 32 0 1 0 0 64 32 32 0 0 0 0-64M392.576 352h387.2a32 32 0 0 0 0-64h-387.2a32 32 0 0 0 0 64M256 480a32 32 0 1 0 0 64 32 32 0 0 0 0-64M256 672a32 32 0 1 0 0 64 32 32 0 0 0 0-64"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconOther.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconOther) : IconOther;
