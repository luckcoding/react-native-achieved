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

const IconFullscreen: FunctionComponent<Props> = ({size, color, ...rest}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M409.376 553.376L224 738.752V608a32 32 0 0 0-64 0v192.544c0 3.488 0.48 6.848 1.024 10.176a31.456 31.456 0 0 0 8.352 27.904c2.336 2.336 5.152 3.808 7.904 5.248 11.648 12.48 28.096 20.384 46.464 20.384h192.512a32 32 0 1 0 0-64l-163.488 0.224 201.856-201.856a31.968 31.968 0 1 0-45.248-45.248M800.512 160H608a32 32 0 0 0 0 64l146.944-0.192-201.568 201.568a31.968 31.968 0 1 0 45.248 45.248l201.632-201.632v147.264a32 32 0 1 0 64 0V223.744A63.84 63.84 0 0 0 800.512 160"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconFullscreen.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconFullscreen) : IconFullscreen;
