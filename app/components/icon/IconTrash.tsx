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

const IconTrash: FunctionComponent<Props> = ({size, color, ...rest}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M736 352.032L736.096 800h-0.128L288 799.968 288.032 352 736 352.032zM384 224h256v64h-256V224z m448 64h-128V202.624C704 182.048 687.232 160 640.16 160h-256.32C336.768 160 320 182.048 320 202.624V288H192a32 32 0 1 0 0 64h32V799.968C224 835.296 252.704 864 288.032 864h447.936A64.064 64.064 0 0 0 800 799.968V352h32a32 32 0 1 0 0-64z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M608 690.56a32 32 0 0 0 32-32V448a32 32 0 1 0-64 0v210.56a32 32 0 0 0 32 32M416 690.56a32 32 0 0 0 32-32V448a32 32 0 1 0-64 0v210.56a32 32 0 0 0 32 32"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconTrash.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconTrash) : IconTrash;
