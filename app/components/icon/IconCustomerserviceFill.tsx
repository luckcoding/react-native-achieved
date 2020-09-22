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

const IconCustomerserviceFill: FunctionComponent<Props> = ({
  size,
  color,
  ...rest
}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M799.68 416H736v-64.16C736 228.416 635.52 128 512 128s-224 100.416-224 223.84V416H224.32C188.864 416 160 444.672 160 479.904v192.192C160 707.328 188.864 736 224.32 736h94.784c0.288 0 0.576 0.192 0.896 0.192 0.32 0 0.608-0.192 0.928-0.192h31.04V351.84A160.128 160.128 0 0 1 512 192c88.256 0 160 71.712 160 159.84v384.352c0 34.112-8.32 58.24-25.504 73.696-16.576 14.848-42.912 22.816-78.144 24.256A63.776 63.776 0 0 0 512 800a64 64 0 0 0 0 128c22.816 0 42.72-12 54.048-29.984 53.312-1.408 94.24-14.528 123.168-40.544 31.04-27.872 46.784-68.704 46.784-121.28V736h63.68A64.192 64.192 0 0 0 864 672.096v-192.192A64.192 64.192 0 0 0 799.68 416"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconCustomerserviceFill.defaultProps = {
  size: 24,
};

export default React.memo
  ? React.memo(IconCustomerserviceFill)
  : IconCustomerserviceFill;
