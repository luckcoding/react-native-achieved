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

const IconMine: FunctionComponent<Props> = ({size, color, ...rest}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 832a318.432 318.432 0 0 1-215.648-84.256C351.264 729.984 443.008 704 509.952 704c68.064 0 162.048 26.976 216.608 44.704A318.24 318.24 0 0 1 512 832m0-224c-52.928 0-96-43.104-96-96.064v-95.872A96.16 96.16 0 0 1 512 320c52.928 0 96 43.104 96 96.064v95.872A96.16 96.16 0 0 1 512 608m0-416c176.448 0 320 143.552 320 320a318.016 318.016 0 0 1-59.136 184.704c-34.432-12-106.944-35.52-178.656-48.16C640.608 620.48 672 570.016 672 511.936v-95.872A160.224 160.224 0 0 0 512 256c-88.224 0-160 71.808-160 160.064v95.872c0 57.664 30.944 107.904 76.832 136.064-70.656 12.16-142.464 35.104-178.528 47.584A317.952 317.952 0 0 1 192 512c0-176.448 143.552-320 320-320m0-64C300.256 128 128 300.256 128 512s172.256 384 384 384 384-172.256 384-384S723.744 128 512 128"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconMine.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconMine) : IconMine;
