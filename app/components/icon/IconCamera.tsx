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

const IconCamera: FunctionComponent<Props> = ({size, color, ...rest}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M224 779.712l-0.128-439.712h146.976l45.856-106.048c1.856-4.256 10.496-9.952 15.136-9.952h192.288c4.768 0 13.248 5.6 15.136 9.92l45.856 106.08 146.88 0.32 0.032 439.68L224 779.68zM832.032 276h-104.832l-29.184-67.52C686.016 180.896 654.272 160 624.128 160h-192.288c-30.144 0-61.888 20.864-73.856 48.544l-29.184 67.456H223.968A64.224 64.224 0 0 0 160 340.32v439.36c0 35.488 28.672 64.32 63.968 64.32h608.064A64.192 64.192 0 0 0 896 779.68v-439.36c0-35.456-28.704-64.32-63.968-64.32z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M528 640c-52.928 0-96-43.072-96-96s43.072-96 96-96 96 43.072 96 96-43.072 96-96 96m0-256c-88.224 0-160 71.776-160 160s71.776 160 160 160 160-71.776 160-160-71.776-160-160-160"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconCamera.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconCamera) : IconCamera;
