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

const IconVideo: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M864 643.296l-77.504-53.056v-125.376L864 412.32v230.976zM192 735.968V288.032L191.968 288 512 288.032h210.496v158.432c-0.032 0.512-0.192 1.024-0.192 1.536v256c0 0.384 0.224 0.704 0.224 1.088V736L192 735.968z m719.008-412.224a31.968 31.968 0 0 0-32.96 1.76l-91.552 62.048v-99.52A64.064 64.064 0 0 0 722.528 224H191.968A64.064 64.064 0 0 0 128 288.032V735.968C128 771.296 156.704 800 191.968 800h530.56a64.064 64.064 0 0 0 63.968-64.032v-42.592l0.384-25.312 91.04 62.336A32 32 0 0 0 928 704V352a32 32 0 0 0-16.992-28.256z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M304 352a48 48 0 1 0 0.032 96.032A48 48 0 0 0 304 352"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconVideo.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconVideo) : IconVideo;
