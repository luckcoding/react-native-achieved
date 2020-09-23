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

const IconShopFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M815.40608 280.5248H206.48448L143.27808 445.9264c0 49.51552 41.088 90.5984 91.65312 90.5984s92.70784-40.03328 92.70784-90.5984c0 49.51552 41.088 90.5984 91.65312 90.5984S512 496.49152 512 445.9264c0 49.51552 41.088 90.5984 91.65312 90.5984s91.65312-40.03328 91.65312-90.5984c0 49.51552 41.088 90.5984 92.70784 90.5984 50.56512 0 92.70784-40.03328 92.70784-90.5984L815.40608 280.5248z m-50.57024 284.44672v210.69824H259.16416v-210.69824H206.4896v221.2352c0 18.96448 21.0688 42.1376 40.03328 42.1376h529.90464c18.96448 0 40.03328-23.17824 40.03328-42.1376v-221.2352h-51.62496z m50.57024-285.49632l2.10944 1.05472-2.10944-1.05472zM248.6272 238.3872h526.7456c17.90976 0 31.60576-13.696 31.60576-31.60576s-13.696-31.60576-31.60576-31.60576H248.6272c-17.90976 0-31.60576 13.696-31.60576 31.60576s13.696 31.60576 31.60576 31.60576z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconShopFill.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconShopFill) : IconShopFill;
