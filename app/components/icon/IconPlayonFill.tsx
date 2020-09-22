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

const IconPlayonFill: FunctionComponent<Props> = ({size, color, ...rest}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M626.976 553.408l-160 117.76a32 32 0 0 1-44.736-6.784 31.36 31.36 0 0 1-3.968-29.12A32.128 32.128 0 0 1 416 624v-192c0-2.688 0.928-5.12 1.568-7.68a31.424 31.424 0 0 1 4.16-26.624 32 32 0 0 1 44.576-7.936l160 111.616a32.096 32.096 0 0 1 0.64 52.032M512 128C300.288 128 128 300.288 128 511.968c0 211.744 172.288 384 384 384 211.744 0 384-172.224 384-384 0-211.68-172.256-383.936-384-383.936"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconPlayonFill.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconPlayonFill) : IconPlayonFill;
