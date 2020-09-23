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

const IconPraiseFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M866.272 382.336c-15.584-19.296-39.872-30.336-66.592-30.336h-164.992c23.168-67.232 5.376-145.024 4.352-149.312a30.944 30.944 0 0 0-4.928-10.656A95.808 95.808 0 0 0 544 128a95.84 95.84 0 0 0-95.456 90.72H448V240a111.328 111.328 0 0 1-37.984 83.392c-16 14.208-35.904 23.776-58.016 26.976V864h384.16c32.352 0 63.04-24.96 69.888-56.8l75.904-354.208c5.504-25.76-0.192-51.488-15.68-70.656M192.192 352C156.8 352 128 380.8 128 416.224v383.552C128 835.168 156.64 864 191.84 864H288V352H192.192z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconPraiseFill.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconPraiseFill) : IconPraiseFill;
