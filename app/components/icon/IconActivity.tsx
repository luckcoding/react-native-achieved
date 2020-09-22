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

const IconActivity: FunctionComponent<Props> = ({size, color, ...rest}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M800 845.088c0 1.76-0.736 2.784-0.096 2.88l-574.656 0.416C224.992 848.192 224 847.04 224 845.088v-477.12h576v477.12zM224 210.88c0-1.728 0.64-2.752 0.096-2.912H352V224a32 32 0 1 0 64 0v-16h192V224a32 32 0 1 0 64 0v-16h127.008a4.736 4.736 0 0 1 0.992 2.88V304H224V210.88zM799.84 144H672V128a32 32 0 0 0-64 0v16h-192V128a32 32 0 0 0-64 0v16H223.712C188.576 144 160 174.016 160 210.88V845.12c0 36.896 28.608 66.88 63.744 66.88h576.512c35.136 0 63.744-29.984 63.744-66.88V210.88c0-36.896-28.768-66.912-64.16-66.912z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M384 560h256a32 32 0 0 0 0-64h-256a32 32 0 0 0 0 64M384 720h256a32 32 0 0 0 0-64h-256a32 32 0 0 0 0 64"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconActivity.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconActivity) : IconActivity;
