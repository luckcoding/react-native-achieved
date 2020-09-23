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

const IconDynamic: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M224 800.256V224l576-0.288 0.256 576.32L224 800.224zM800.256 160H223.744A63.808 63.808 0 0 0 160 223.712v576.544C160 835.392 188.608 864 223.744 864h576.512A63.84 63.84 0 0 0 864 800.256V223.712a63.808 63.808 0 0 0-63.744-63.68z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M718.464 442.816l-116.8 116.768-102.176-102.208a32 32 0 0 0-45.152-0.128l-156.832 155.2a32.032 32.032 0 0 0 45.024 45.536l134.208-132.832 102.336 102.336a32.96 32.96 0 0 0 45.248 0l139.392-139.424a31.968 31.968 0 1 0-45.248-45.248"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconDynamic.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconDynamic) : IconDynamic;
