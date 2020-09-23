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

const IconAddpeopleFill: FunctionComponent<Props> = ({
  size,
  color,
  ...rest
}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M550.4 824.416c-24.736-57.536-53.216-158.016 2.88-237.376 1.216-0.96 2.08-1.792 3.072-2.656A176.864 176.864 0 0 0 627.2 457.6c0.512-5.568 1.216-11.072 1.216-16.768V336.064C628.416 238.976 552.704 160 459.68 160c-93.024 0-168.736 78.976-168.736 176.064v104.736c0 60.16 29.12 113.312 73.344 145.088a911.264 911.264 0 0 0-158.08 53.28C179.84 650.24 160 681.088 160 710.912v113.76c0 3.52 0.544 6.976 1.632 10.304 8.64 26.432 31.936 44.16 58.016 44.16h309.664a29.76 29.76 0 0 0 19.68-7.936c6.592-5.888 11.04-14.304 11.04-24.064 0-0.768-0.448-2.048-0.704-3.136a69.664 69.664 0 0 0-8.928-19.584"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M804.48 725.248h-39.296V768c0 12.384-9.6 22.4-21.504 22.4a21.952 21.952 0 0 1-21.504-22.4v-42.752H681.6a21.952 21.952 0 0 1-21.504-22.4c0-12.384 9.6-22.4 21.504-22.4h40.576V640c0-12.384 9.6-22.4 21.504-22.4 11.904 0 21.504 10.016 21.504 22.4v40.448h39.296c11.904 0 21.504 10.016 21.504 22.4 0 12.384-9.6 22.4-21.504 22.4m-16.064-207.296A176.64 176.64 0 0 0 743.68 512c-101.632 0-184.32 86.08-184.32 192 0 105.888 82.688 192 184.32 192 15.456 0 30.4-2.24 44.736-5.952C868.48 869.12 928 793.792 928 704s-59.52-165.152-139.584-186.048"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconAddpeopleFill.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconAddpeopleFill) : IconAddpeopleFill;
