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

const IconFlag: FunctionComponent<Props> = ({size, color, ...rest}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M288 556.256V223.712l430.464 0.32-120.352 165.952 120.384 166.016L288 556.256z m500.352-12.928l-111.168-153.344 111.168-153.344c12.192-16.832 14.528-35.648 6.368-51.584-8.128-15.936-24.736-25.056-45.568-25.056H288.064A63.968 63.968 0 0 0 224 223.712V864a32 32 0 0 0 64 0v-244H749.152c20.96 0 37.664-9.12 45.76-25.024 8.096-15.872 5.728-34.72-6.56-51.648z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconFlag.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconFlag) : IconFlag;
