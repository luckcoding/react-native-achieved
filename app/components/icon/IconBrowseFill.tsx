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

const IconBrowseFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M376.16 551.936v-71.872a128.16 128.16 0 0 1 128-128.064c70.592 0 128 57.44 128 128.064v71.872a128.16 128.16 0 0 1-128 128.064c-70.592 0-128-57.44-128-128.064m494.88-80.96c-2.048-4.704-26.72-59.936-78.88-116.928C733.696 290.144 640.576 224 504.16 224s-229.6 66.24-288 130.016c-52.096 56.864-76.608 111.68-78.208 115.488-12.736 24.896-13.056 60.896-2.016 82.816 0.48 1.248 24.32 60.96 80.224 121.44 57.984 62.72 150.464 126.24 288 126.24 137.504 0 230.08-63.68 288-126.208 55.872-60.32 79.52-119.616 79.552-119.776 11.744-24.896 10.88-61.664-0.672-83.008"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconBrowseFill.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconBrowseFill) : IconBrowseFill;
