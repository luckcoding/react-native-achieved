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

const IconWorkbenchFill: FunctionComponent<Props> = ({
  size,
  color,
  ...rest
}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M160 800.256C160 835.424 188.608 864 223.712 864h92.48V448H160v352.256zM380.16 864h420.096A63.808 63.808 0 0 0 864 800.256V448H380.16v416zM800.256 160H223.68A63.808 63.808 0 0 0 160 223.744V384h704V223.744A63.776 63.776 0 0 0 800.256 160"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconWorkbenchFill.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconWorkbenchFill) : IconWorkbenchFill;
