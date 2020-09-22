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

const IconMailFill: FunctionComponent<Props> = ({size, color, ...rest}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 576a32 32 0 0 1-17.184-4.992L128 337.568v430.656A64 64 0 0 0 192.064 832h639.872A64 64 0 0 0 896 768.224V337.888l-366.816 233.12A32.096 32.096 0 0 1 512 576"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M831.936 192H192.064A64 64 0 0 0 128 255.808v4.896l384 245.376 384-244.032v-6.24A64 64 0 0 0 831.936 192"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconMailFill.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconMailFill) : IconMailFill;
