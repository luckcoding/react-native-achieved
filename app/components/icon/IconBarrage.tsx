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

const IconBarrage: FunctionComponent<Props> = ({size, color, ...rest}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M288 576h128a32 32 0 0 0 0-64H288a32 32 0 0 0 0 64M288 704h128a32 32 0 0 0 0-64H288a32 32 0 0 0 0 64M288 448h256a32 32 0 0 0 0-64H288a32 32 0 0 0 0 64"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M831.936 768L192 768.224V255.776L192.096 256 832 255.776 831.936 768z m0-576H192.096A64 64 0 0 0 128 255.776v512.448A64 64 0 0 0 192.096 832h639.84A64 64 0 0 0 896 768.224V255.776A64 64 0 0 0 831.936 192z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconBarrage.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconBarrage) : IconBarrage;
