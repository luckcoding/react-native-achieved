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

const IconRight: FunctionComponent<Props> = ({size, color, ...rest}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M822.464 265.344a28.256 28.256 0 0 0-43.072 1.312l-352.96 417.664-181.92-212.992a28.288 28.288 0 0 0-43.104-1.088 37.12 37.12 0 0 0-0.96 48.256l204.096 238.944c5.76 6.752 13.696 10.56 22.016 10.56h0.096a29.088 29.088 0 0 0 22.048-10.656L823.68 313.6c11.52-13.728 11.008-35.328-1.216-48.256"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconRight.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconRight) : IconRight;
