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

const IconPlayon: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 832c-176.448 0-320-143.552-320-320S335.552 192 512 192s320 143.552 320 320-143.552 320-320 320m0-704C300.256 128 128 300.256 128 512s172.256 384 384 384 384-172.256 384-384S723.744 128 512 128"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M480 582.08v-104.736l73.056 50.976L480 582.08z m146.304-80.704l-160-111.648a32.032 32.032 0 0 0-44.544 8 31.488 31.488 0 0 0-4.224 26.592c-0.64 2.56-1.536 4.96-1.536 7.68v192c0 3.968 0.928 7.68 2.272 11.2a31.36 31.36 0 0 0 3.936 29.12 32 32 0 0 0 44.768 6.784l160-117.696a32.032 32.032 0 0 0-0.672-52.032z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconPlayon.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconPlayon) : IconPlayon;
