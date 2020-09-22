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

const IconFlagFill: FunctionComponent<Props> = ({size, color, ...rest}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M788.352 543.36l-111.168-153.312 111.168-153.376c12.16-16.8 14.528-35.584 6.4-51.552C786.624 169.184 769.984 160 749.12 160H288.064A63.968 63.968 0 0 0 224 223.776V864a32 32 0 0 0 64 0v-243.968h461.12c20.992 0 37.696-9.184 45.824-25.088 8.064-15.84 5.696-34.656-6.592-51.584"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconFlagFill.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconFlagFill) : IconFlagFill;
