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

const IconDynamicFill: FunctionComponent<Props> = ({size, color, ...rest}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M763.712 488.064l-139.424 139.424a31.904 31.904 0 0 1-45.248 0l-102.336-102.336-134.208 132.864a31.936 31.936 0 0 1-45.248-0.256 32 32 0 0 1 0.224-45.248l156.832-155.264a32 32 0 0 1 45.152 0.128l102.208 102.24 116.8-116.8a31.968 31.968 0 1 1 45.248 45.248M800.256 160H223.744A63.808 63.808 0 0 0 160 223.744v576.512C160 835.424 188.576 864 223.744 864h576.512A63.808 63.808 0 0 0 864 800.256V223.744A63.84 63.84 0 0 0 800.256 160"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconDynamicFill.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconDynamicFill) : IconDynamicFill;
