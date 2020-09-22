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

const IconWorkbench: FunctionComponent<Props> = ({size, color, ...rest}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M380.16 800.192V448h419.936l0.16 352-420.064 0.192zM224 448h92.16v352.224L224 800.256V448z m0-224l576-0.256 0.064 160.256H224V224z m576.256-64H223.744A63.84 63.84 0 0 0 160 223.744v576.512C160 835.392 188.608 864 223.744 864h576.512A63.808 63.808 0 0 0 864 800.256V223.744A63.808 63.808 0 0 0 800.256 160z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconWorkbench.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconWorkbench) : IconWorkbench;
