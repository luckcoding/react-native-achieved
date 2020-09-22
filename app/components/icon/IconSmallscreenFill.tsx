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

const IconSmallscreenFill: FunctionComponent<Props> = ({
  size,
  color,
  ...rest
}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M742.624 342.624l-169.76 169.76 67.424-0.128a32 32 0 0 1 0 64h-128.544A63.84 63.84 0 0 1 448 512.512V384a32 32 0 1 1 64 0v98.752l185.376-185.376a31.968 31.968 0 1 1 45.248 45.248zM352 736.256v63.808H224V672h128v64.256zM800.32 160H223.712A63.84 63.84 0 0 0 160 223.744V800.32C160 835.424 188.608 864 223.712 864H800.32A63.808 63.808 0 0 0 864 800.256V223.744A63.808 63.808 0 0 0 800.32 160z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconSmallscreenFill.defaultProps = {
  size: 24,
};

export default React.memo
  ? React.memo(IconSmallscreenFill)
  : IconSmallscreenFill;
