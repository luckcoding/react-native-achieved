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

const IconCouponsFill: FunctionComponent<Props> = ({size, color, ...rest}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M608 576a22.4 22.4 0 0 1 0 44.8h-73.6v19.2a22.4 22.4 0 1 1-44.8 0v-19.2H416a22.4 22.4 0 1 1 0-44.8h73.6v-51.2H416a22.4 22.4 0 1 1 0-44.8h64.384l-0.224-0.16-64-64a22.4 22.4 0 0 1 31.68-31.68l64 64 0.16 0.224 0.16-0.224 64-64a22.368 22.368 0 1 1 31.68 31.68l-64 64-0.224 0.16H608a22.4 22.4 0 0 1 0 44.8h-73.6V576H608z m256-160h32V255.776A64 64 0 0 0 831.936 192H192.064A64 64 0 0 0 128 255.776V416h32c52.928 0 96 43.072 96 96s-43.072 96-96 96H128v160.224A64 64 0 0 0 192.064 832h639.872A64 64 0 0 0 896 768.224V608h-32c-52.928 0-96-43.072-96-96s43.072-96 96-96z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconCouponsFill.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconCouponsFill) : IconCouponsFill;
