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

const IconSuspend: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M352 192a32 32 0 0 0-32 32v608.832a32 32 0 1 0 64 0V224a32 32 0 0 0-32-32M672 192a32 32 0 0 0-32 32v608.832a32 32 0 1 0 64 0V224a32 32 0 0 0-32-32"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconSuspend.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconSuspend) : IconSuspend;
