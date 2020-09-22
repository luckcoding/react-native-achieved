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

const IconMobilephone: FunctionComponent<Props> = ({size, color, ...rest}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M735.968 800L288 800.256V672h447.968v128zM288 223.744L288.032 224 736 223.744 735.968 608H288V223.744zM735.968 160H288.032A63.968 63.968 0 0 0 224 223.744v576.512C224 835.392 252.704 864 288.032 864h447.936A63.968 63.968 0 0 0 800 800.256V223.744A63.968 63.968 0 0 0 735.968 160z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M480 768h64a32 32 0 0 0 0-64h-64a32 32 0 0 0 0 64"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconMobilephone.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconMobilephone) : IconMobilephone;
