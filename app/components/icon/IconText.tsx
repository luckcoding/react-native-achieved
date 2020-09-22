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

const IconText: FunctionComponent<Props> = ({size, color, ...rest}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M779.776 192H224a32 32 0 0 0 0 64h245.888v597.888a32 32 0 0 0 64 0V256h245.888a32 32 0 0 0 0-64"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconText.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconText) : IconText;
