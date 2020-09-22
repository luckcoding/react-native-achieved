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

const IconPackup: FunctionComponent<Props> = ({size, color, ...rest}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M793.024 710.272a32 32 0 1 0 45.952-44.544l-310.304-320a32 32 0 0 0-46.4 0.48l-297.696 320a32 32 0 0 0 46.848 43.584l274.752-295.328 286.848 295.808z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconPackup.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconPackup) : IconPackup;
