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

const IconScan: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M832 480H192a32 32 0 0 0 0 64h640a32 32 0 0 0 0-64M800.256 160H223.712a63.808 63.808 0 0 0-63.68 63.744V384a32 32 0 1 0 64 0l-0.32-160 576.32-0.256V384a32 32 0 1 0 64 0V223.744A63.84 63.84 0 0 0 800.224 160M832 608a32 32 0 0 0-32 32l0.256 160L224 800.256V640a32 32 0 0 0-64 0v160.256C160 835.392 188.608 864 223.744 864h576.512A63.84 63.84 0 0 0 864 800.256V640a32 32 0 0 0-32-32"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconScan.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconScan) : IconScan;
