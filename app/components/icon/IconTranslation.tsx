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

const IconTranslation: FunctionComponent<Props> = ({
  size,
  color,
  ...rest
}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M410.208 319.776a96 96 0 0 1 192 0v192.448a96 96 0 0 1-96 95.744 96 96 0 0 1-96-95.744V319.776z m96 352.192c88.192 0 160-71.648 160-159.744V319.776a160.096 160.096 0 0 0-160-159.776c-88.224 0-160 71.68-160 159.776v192.448a160.032 160.032 0 0 0 160 159.744z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M742.4 448a32 32 0 0 0-32 32v24.672c0 116.192-94.72 210.688-211.2 210.688-116.448 0-211.2-94.496-211.2-210.688V480a32 32 0 0 0-64 0v24.672c0 140.16 105.76 255.904 241.76 272.448V864a32 32 0 0 0 64 0v-86.432c137.408-15.264 244.64-131.744 244.64-272.896V480a32 32 0 0 0-32-32"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconTranslation.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconTranslation) : IconTranslation;
