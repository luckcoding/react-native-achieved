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

const IconStealthFill: FunctionComponent<Props> = ({
  size,
  color,
  ...rest
}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M645.568 409.6h-256a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64m0 128h-256a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64m0 128h-256a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64M512 128C300.288 128 128 300.256 128 512c0 211.712 172.288 384 384 384 211.744 0 384-172.288 384-384 0-211.744-172.256-384-384-384"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconStealthFill.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconStealthFill) : IconStealthFill;
