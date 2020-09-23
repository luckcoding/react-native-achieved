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

const IconClock: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 813.248c-158.784 0-288-129.216-288-288s129.216-288 288-288 288 129.216 288 288-129.216 288-288 288m0-640c-194.08 0-352 157.92-352 352 0 101.856 43.744 193.472 113.152 257.824a31.04 31.04 0 0 0-13.248 7.552l-58.528 58.56a31.968 31.968 0 1 0 45.248 45.216l58.528-58.528a31.584 31.584 0 0 0 8.832-19.84A349.664 349.664 0 0 0 512 877.248c71.328 0 137.664-21.44 193.152-58.048a31.04 31.04 0 0 0 8.224 16.672l58.528 58.56a31.904 31.904 0 0 0 45.248 0 32 32 0 0 0 0-45.28l-58.528-58.528a31.36 31.36 0 0 0-9.28-6.176C819.616 720.064 864 627.84 864 525.248c0-194.08-157.92-352-352-352"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M544 519.104v-185.856a32 32 0 0 0-64 0v199.104c0 8.48 3.36 16.64 9.376 22.624l107.296 107.296a31.904 31.904 0 0 0 45.248 0 32 32 0 0 0 0-45.248L544 519.104zM182.624 286.4l90.528-90.56a32 32 0 0 0-45.248-45.216L137.376 241.152A31.968 31.968 0 1 0 182.624 286.4M883.872 227.872l-90.496-90.496a31.968 31.968 0 1 0-45.248 45.248l90.496 90.496a31.904 31.904 0 0 0 45.248 0 31.968 31.968 0 0 0 0-45.248"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconClock.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconClock) : IconClock;
