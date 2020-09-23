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

const IconBrushFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M879.04 323.36l-176.8-176.768a64.032 64.032 0 0 0-90.464 0.224l-67.36 67.392 44.864 44.64 0.96-0.192h0.032l176.64 176.576 30.304 30.4 14.848 14.88 66.72-66.72a64 64 0 0 0 0.224-90.432M325.888 815.36l-13.6-13.632-88.32-88.64-14.08-14.144-40.704-43.392L160 645.76v156.128c0 35.136 28.576 63.68 63.68 63.68h154.208l-11.648-11.2-40.352-38.976zM545.024 303.872l-45.248-45.056L179.616 578.976l45.248 45.248 176.544 176.704 45.184 45.024 318.976-318.976-43.936-46.496z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconBrushFill.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconBrushFill) : IconBrushFill;
