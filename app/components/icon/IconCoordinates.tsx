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

const IconCoordinates: FunctionComponent<Props> = ({
  size,
  color,
  ...rest
}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 813.312C445.568 732.928 288 520.064 288 416c0-123.488 100.48-224 224-224s224 100.512 224 224c0 103.776-156.96 316.064-224 397.344M512 128c-158.784 0-288 129.184-288 288 0 148.416 217.696 413.088 243.232 443.616a57.92 57.92 0 0 0 44.8 21.856h0.096a57.6 57.6 0 0 0 44.512-21.696C581.536 830.016 800 564.672 800 416c0-158.816-129.216-288-288-288"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M512 480c-35.296 0-64-28.704-64-64s28.704-64 64-64 64 28.704 64 64-28.704 64-64 64m0-192c-70.592 0-128 57.408-128 128s57.408 128 128 128 128-57.408 128-128-57.408-128-128-128"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconCoordinates.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconCoordinates) : IconCoordinates;
