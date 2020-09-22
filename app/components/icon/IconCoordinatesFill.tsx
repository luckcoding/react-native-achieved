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

const IconCoordinatesFill: FunctionComponent<Props> = ({
  size,
  color,
  ...rest
}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M384 416.032c0-70.592 57.408-128 128-128s128 57.408 128 128-57.408 128-128 128-128-57.408-128-128m128.32-288h-0.64c-158.624 0.16-287.68 129.312-287.68 288 0 80.512 64.032 195.008 126.72 288a2026.4 2026.4 0 0 0 116.512 155.584 57.92 57.92 0 0 0 44.8 21.856h0.096a57.504 57.504 0 0 0 44.512-21.696 2024.256 2024.256 0 0 0 116.64-155.744c62.688-92.992 126.72-207.488 126.72-288 0-158.688-129.056-287.84-287.68-288"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconCoordinatesFill.defaultProps = {
  size: 24,
};

export default React.memo
  ? React.memo(IconCoordinatesFill)
  : IconCoordinatesFill;
