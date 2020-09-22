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

const IconSmallscreen: FunctionComponent<Props> = ({size, color, ...rest}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M799.936 800L416 800.192V608H223.936L223.744 224 800 223.744 799.968 800zM224 800.256V672h128v128.064l-105.184 0.192H224zM800.288 160H223.68A63.84 63.84 0 0 0 160 223.744v576.544C160 835.424 188.608 864 223.68 864H800.32a63.808 63.808 0 0 0 63.68-63.744V223.744A63.808 63.808 0 0 0 800.32 160z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M511.744 576.256h128.544a32 32 0 0 0 0-64l-67.424 0.128 169.76-169.76a31.968 31.968 0 1 0-45.248-45.248L512 482.752V384a32 32 0 1 0-64 0v128.512c0 35.136 28.608 63.744 63.744 63.744"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconSmallscreen.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconSmallscreen) : IconSmallscreen;
