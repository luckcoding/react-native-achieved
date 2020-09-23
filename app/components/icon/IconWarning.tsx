/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

const IconWarning: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M522.656 388.064a32 32 0 0 0-32 32v160a32 32 0 0 0 64 0v-160a32 32 0 0 0-32-32M522.656 676.064a32 32 0 1 0 0 64 32 32 0 0 0 0-64"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M714.656 795.616H203.072l127.584-221.888 33.152-57.664 158.848-276.224 158.816 276.224 33.184 57.696 127.552 221.856h-127.552z m194.528-11.968L566.528 187.712c-10.144-17.6-26.112-27.712-43.872-27.712s-33.728 10.112-43.84 27.712L136.096 783.648c-10.048 17.568-10.784 36.48-1.92 51.84 8.896 15.328 25.6 24.128 45.824 24.128H865.344c20.16 0 36.864-8.8 45.76-24.128 8.896-15.36 8.192-34.24-1.92-51.84z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconWarning.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconWarning) : IconWarning;
