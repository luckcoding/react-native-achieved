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

const IconDeleteFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M649.824 604.576a31.968 31.968 0 1 1-45.248 45.248L505.6 550.848l-98.976 98.976a31.904 31.904 0 0 1-45.248 0 32 32 0 0 1 0-45.248l98.976-98.976-98.976-98.976a32 32 0 0 1 45.248-45.248l98.976 98.976 98.976-98.976a32 32 0 0 1 45.248 45.248L550.848 505.6l98.976 98.976zM512 128C300.288 128 128 300.288 128 512c0 211.744 172.288 384 384 384 211.744 0 384-172.256 384-384 0-211.712-172.256-384-384-384z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconDeleteFill.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconDeleteFill) : IconDeleteFill;
