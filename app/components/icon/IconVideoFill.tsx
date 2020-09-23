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

const IconVideoFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M304 448a48 48 0 1 1 0.032-96.032 48 48 0 0 1 0 96m606.976-124.256a32.192 32.192 0 0 0-32.96 1.792l-91.52 62.048V288a64.064 64.064 0 0 0-64-64.032H192a64.064 64.064 0 0 0-64 64V736c0 35.328 28.704 64 64 64h530.56a64.064 64.064 0 0 0 63.936-64v-42.592l0.384-25.312 91.04 62.336A32 32 0 0 0 928 704V352c0-11.84-6.56-22.72-16.96-28.288"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconVideoFill.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconVideoFill) : IconVideoFill;
