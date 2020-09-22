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

const IconClockFill: FunctionComponent<Props> = ({size, color, ...rest}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M480 532.352v-199.104a32 32 0 0 1 64 0v185.856l97.92 97.92a32 32 0 0 1-45.248 45.248l-107.296-107.296a31.904 31.904 0 0 1-9.376-22.624m32-359.104c-194.08 0-352 157.92-352 352 0 101.888 43.744 193.504 113.152 257.824a31.36 31.36 0 0 0-13.248 7.552l-58.528 58.528a31.968 31.968 0 1 0 45.248 45.248l58.528-58.56a31.52 31.52 0 0 0 8.832-19.84A349.664 349.664 0 0 0 512 877.28c71.328 0 137.664-21.44 193.152-58.048a31.04 31.04 0 0 0 8.224 16.64l58.528 58.56a31.904 31.904 0 0 0 45.248 0 32 32 0 0 0 0-45.248l-58.528-58.56a32 32 0 0 0-9.28-6.144C819.616 720.064 864 627.84 864 525.248c0-194.08-157.92-352-352-352M182.624 286.4l90.528-90.56a32 32 0 0 0-45.248-45.216L137.376 241.152A31.968 31.968 0 1 0 182.624 286.4M883.872 227.872l-90.496-90.496a31.968 31.968 0 1 0-45.248 45.248l90.496 90.496a31.904 31.904 0 0 0 45.248 0 31.968 31.968 0 0 0 0-45.248"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconClockFill.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconClockFill) : IconClockFill;
