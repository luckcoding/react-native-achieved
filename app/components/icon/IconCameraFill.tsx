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

const IconCameraFill: FunctionComponent<Props> = ({size, color, ...rest}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M528 384c88.224 0 160 71.776 160 160s-71.776 160-160 160-160-71.776-160-160 71.776-160 160-160m320-105.728a62.688 62.688 0 0 0-15.968-2.24h-104.832L704.704 224l-6.688-15.488C686.016 180.864 654.272 160 624.128 160h-192.288c-30.144 0-61.888 20.864-73.856 48.544L351.296 224l-22.496 52H223.968c-5.536 0-10.848 0.96-15.968 2.272a64.16 64.16 0 0 0-48 62.08v439.36c0 29.888 20.448 54.816 48 62.016 5.12 1.312 10.432 2.272 15.968 2.272h608.064c5.536 0 10.848-0.96 15.968-2.24a64.224 64.224 0 0 0 48-62.048v-439.36c0-29.92-20.48-54.912-48-62.08"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconCameraFill.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconCameraFill) : IconCameraFill;
