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

const IconCustomerservice: FunctionComponent<Props> = ({
  size,
  color,
  ...rest
}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M799.68 672H736v-192h63.68l0.32-0.096L799.68 672zM288 672.032l-64 0.064L224.32 480H288V672.032zM799.68 416H736v-64.192C736 228.416 635.52 128 512 128s-224 100.416-224 223.808V416H224.32C188.864 416 160 444.672 160 479.904v192.192C160 707.328 188.864 736 224.32 736h94.848c0.288 0 0.544 0.16 0.832 0.16 0.32 0 0.544-0.16 0.864-0.16H352V351.808A160.064 160.064 0 0 1 512 192c88.224 0 160 71.68 160 159.808V736.16c0 34.144-8.352 58.24-25.536 73.664-16.544 14.88-42.912 22.944-78.144 24.384A63.68 63.68 0 0 0 512 800a64 64 0 0 0 0 128c22.816 0 42.72-12.032 54.048-29.984 53.312-1.44 94.208-14.56 123.2-40.576 31.04-27.872 46.72-68.672 46.72-121.28V736h63.744A64.16 64.16 0 0 0 864 672.096v-192.192A64.16 64.16 0 0 0 799.68 416z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconCustomerservice.defaultProps = {
  size: 24,
};

export default React.memo
  ? React.memo(IconCustomerservice)
  : IconCustomerservice;
