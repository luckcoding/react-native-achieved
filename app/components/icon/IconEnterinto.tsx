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

const IconEnterinto: FunctionComponent<Props> = ({size, color, ...rest}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 832c-176.448 0-320-143.552-320-320S335.552 192 512 192s320 143.552 320 320-143.552 320-320 320m0-704C300.256 128 128 300.256 128 512s172.256 384 384 384 384-172.256 384-384S723.744 128 512 128"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M469.376 360.192a31.968 31.968 0 1 0-42.752 47.616l134.016 120.32-134.496 125.856a32 32 0 0 0 43.712 46.72l160-149.696a31.968 31.968 0 0 0-0.48-47.168l-160-143.68z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconEnterinto.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconEnterinto) : IconEnterinto;
