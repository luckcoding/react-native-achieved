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

const IconServiceFill: FunctionComponent<Props> = ({
  size,
  color,
  ...rest
}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M712.32 656a224.736 224.736 0 0 1-193.984 112 224.832 224.832 0 0 1-194.048-112 32 32 0 1 1 55.36-32 160.8 160.8 0 0 0 138.688 80 160.48 160.48 0 0 0 138.56-80A32 32 0 1 1 712.32 656M800.256 256H223.744A63.808 63.808 0 0 0 160 319.744v512.416C160 867.392 188.576 896 223.744 896h576.512A63.872 63.872 0 0 0 864 832.192V319.776A63.84 63.84 0 0 0 800.256 256M512 160c52.928 0 96 43.072 96 96h64c0-88.224-71.776-160-160-160s-160 71.776-160 160h64c0-52.928 43.072-96 96-96"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconServiceFill.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconServiceFill) : IconServiceFill;
