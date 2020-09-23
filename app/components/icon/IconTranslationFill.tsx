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

const IconTranslationFill: FunctionComponent<Props> = ({
  size,
  color,
  ...rest
}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M506.208 672c88.224 0 160-71.648 160-159.744V319.776a160.064 160.064 0 0 0-160-159.776c-88.224 0-160 71.68-160 159.776v192.48a160.032 160.032 0 0 0 160 159.744"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M742.4 448a32 32 0 0 0-32 32v24.704c0 116.16-94.72 210.656-211.2 210.656-116.448 0-211.2-94.496-211.2-210.656V480a32 32 0 1 0-64 0v24.704c0 140.128 105.76 255.872 241.792 272.448V864a32 32 0 1 0 64 0v-86.432c137.376-15.232 244.608-131.712 244.608-272.864V480a32 32 0 0 0-32-32"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconTranslationFill.defaultProps = {
  size: 24,
};

export default React.memo
  ? React.memo(IconTranslationFill)
  : IconTranslationFill;
