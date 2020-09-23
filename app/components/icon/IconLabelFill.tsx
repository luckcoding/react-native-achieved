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

const IconLabelFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M497.376 392.288c0-61.76 50.24-112 112-112s112 50.24 112 112-50.24 112-112 112-112-50.24-112-112m361.696-164.352c0-35.2-28.608-63.84-62.624-63.84h-0.064C795.296 164.064 684.704 160 601.28 160c-96.16 0-104.8 4.64-115.2 15.04l-148.704 148.704-190.72 190.72c-24.96 24.96-24.896 65.6 0.16 90.656l271.232 271.232c12.16 12.128 28.256 18.784 45.44 18.784 17.152 0 33.184-6.624 45.184-18.624l212.224-212.224 127.2-127.2c11.2-11.2 21.76-21.76 10.976-309.152"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconLabelFill.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconLabelFill) : IconLabelFill;
