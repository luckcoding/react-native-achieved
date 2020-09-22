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

const IconFlashlightFill: FunctionComponent<Props> = ({
  size,
  color,
  ...rest
}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M830.016 454.24a32 32 0 0 0-26.112-20.736l-237.216-29.344 59.136-236.384a31.968 31.968 0 0 0-54.688-29.312L200.32 545.28a32 32 0 0 0 19.712 53.312l235.648 29.28-60.896 236.32a32.032 32.032 0 0 0 54.56 29.664l374.208-406.944a32 32 0 0 0 6.464-32.672"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconFlashlightFill.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconFlashlightFill) : IconFlashlightFill;
