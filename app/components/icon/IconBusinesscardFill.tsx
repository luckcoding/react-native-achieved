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

const IconBusinesscardFill: FunctionComponent<Props> = ({
  size,
  color,
  ...rest
}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M736 416h-192a32 32 0 1 1 0-64h192a32 32 0 1 1 0 64m0 128h-128a32 32 0 1 1 0-64h128a32 32 0 1 1 0 64m0 128h-128a32 32 0 1 1 0-64h128a32 32 0 1 1 0 64m-510.304-17.536L224 649.472v-55.904c0-20.736 13.344-40.608 32.48-48.32 1.024-0.48 20.736-9.024 47.296-16.992a88.736 88.736 0 0 1-12.416-44.736V441.6c0-39.232 25.504-72.288 60.64-84.384 9.12-3.136 18.72-5.216 28.864-5.216a89.76 89.76 0 0 1 89.504 89.6v41.92c0 15.744-4.416 30.336-11.584 43.2a483.2 483.2 0 0 1 53.664 18.88c12.896 5.344 23.04 16.896 28 30.4 2.112 5.632 3.552 11.52 3.552 17.568l-0.128 50.56a45.44 45.44 0 0 1-45.28 42.016H269.44a46.336 46.336 0 0 1-43.712-31.68M831.936 192H192A64.032 64.032 0 0 0 128 255.776v512.448C128 803.36 156.8 832 192.096 832h639.84A64 64 0 0 0 896 768.224V255.776A64 64 0 0 0 831.936 192"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconBusinesscardFill.defaultProps = {
  size: 24,
};

export default React.memo
  ? React.memo(IconBusinesscardFill)
  : IconBusinesscardFill;
