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

const IconFlashlight: FunctionComponent<Props> = ({size, color, ...rest}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M488.64 756.608l38.08-148a32 32 0 0 0-27.008-39.744l-210.432-26.176 243.648-267.328-37.088 148.32a32 32 0 0 0 27.104 39.52l211.392 26.176-245.728 267.2z m341.408-302.4a32.096 32.096 0 0 0-26.112-20.736l-237.248-29.344 59.136-236.352a32.032 32.032 0 0 0-54.72-29.312L200.32 545.248a32 32 0 0 0 19.712 53.312l235.68 29.312-60.864 236.352a32 32 0 0 0 54.528 29.632l374.208-406.944c8.096-8.832 10.56-21.44 6.464-32.704z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconFlashlight.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconFlashlight) : IconFlashlight;
