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

const IconEnterintoFill: FunctionComponent<Props> = ({
  size,
  color,
  ...rest
}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M629.856 550.976l-160 149.76a31.904 31.904 0 0 1-45.216-1.504 31.936 31.936 0 0 1 1.504-45.216l134.496-125.888-134.016-120.32a32 32 0 1 1 42.752-47.616l160 143.616a31.904 31.904 0 0 1 0.48 47.168M512 128C300.256 128 128 300.256 128 512c0 211.712 172.256 384 384 384s384-172.288 384-384c0-211.744-172.256-384-384-384"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconEnterintoFill.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconEnterintoFill) : IconEnterintoFill;
