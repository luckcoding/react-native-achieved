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

const IconPeopleFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M813.728 640c-3.904-1.728-58.56-25.6-129.312-45.792a883.616 883.616 0 0 0-72.608-17.568c36.096-30.592 59.552-75.68 59.552-126.656v-123.104A167.168 167.168 0 0 0 504.192 160c-92.16 0-167.2 74.72-167.2 166.88v123.104c0 52.352 24.768 98.624 62.72 129.248-25.472 5.408-50.112 11.904-72.8 18.688a1098.656 1098.656 0 0 0-115.648 41.664C182.016 651.328 160 684.192 160 716v131.68l1.696 4.992c9.504 27.936 35.136 46.688 63.808 46.688h572.992a65.536 65.536 0 0 0 64.96-56.96l0.544-126.4c0-31.584-21.952-64.384-50.272-76"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconPeopleFill.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconPeopleFill) : IconPeopleFill;
