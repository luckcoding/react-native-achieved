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

const IconHeadlines: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M831.904 768L192 768.224 192.096 256 832 255.808l0.224 512.16-0.32 0.032m0-576H192.096A64 64 0 0 0 128 255.808v512.416A64 64 0 0 0 192.096 832h639.808A64.032 64.032 0 0 0 896 768.224V255.808A64.032 64.032 0 0 0 831.904 192"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M288 576h128a32 32 0 1 0 0-64H288a32 32 0 1 0 0 64M544 640H288a32 32 0 1 0 0 64h256a32 32 0 1 0 0-64M512 320v256h256v-256h-256z m192 192h-128v-128h128v128z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconHeadlines.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconHeadlines) : IconHeadlines;
