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

const IconTrashFill: FunctionComponent<Props> = ({size, color, ...rest}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M832 288h-128V202.624C704 182.016 687.232 160 640.128 160h-256.256C336.768 160 320 182.016 320 202.624V288H192a32 32 0 0 0 0 64h224l192 0.032V352h224a32 32 0 0 0 0-64zM384 448a32 32 0 0 1 64 0v210.528a32 32 0 0 1-64 0V448z m192 0a32 32 0 0 1 64 0v210.528a32 32 0 0 1-64 0V448z m32-47.136H224v399.104c0 20.672 9.984 38.848 25.184 50.56 10.784 8.32 24.16 13.472 38.848 13.472h447.936c14.688 0 28.064-5.152 38.88-13.472 15.168-11.712 25.152-29.888 25.152-50.56V400.864h-192z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconTrashFill.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconTrashFill) : IconTrashFill;
