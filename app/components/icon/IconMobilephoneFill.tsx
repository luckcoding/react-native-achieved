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

const IconMobilephoneFill: FunctionComponent<Props> = ({
  size,
  color,
  ...rest
}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M736 608H288l0.032-384L736 223.744l0.096 384.288L736 608z m-192 160h-64a32 32 0 0 1 0-64h64a32 32 0 0 1 0 64z m191.968-608H288.032A64 64 0 0 0 224 223.744v576.512A64 64 0 0 0 288.032 864h447.936A64 64 0 0 0 800 800.256V223.744A64 64 0 0 0 735.968 160z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconMobilephoneFill.defaultProps = {
  size: 24,
};

export default React.memo
  ? React.memo(IconMobilephoneFill)
  : IconMobilephoneFill;
