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

const IconTimeFill: FunctionComponent<Props> = ({size, color, ...rest}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M641.92 648.96a31.904 31.904 0 0 1-45.248 0l-107.296-107.232a31.872 31.872 0 0 1-9.376-22.624V320a32 32 0 0 1 64 0v185.856l97.92 97.888a31.968 31.968 0 0 1 0 45.248M512 128C300.256 128 128 300.256 128 512s172.256 384 384 384 384-172.256 384-384S723.744 128 512 128"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconTimeFill.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconTimeFill) : IconTimeFill;
