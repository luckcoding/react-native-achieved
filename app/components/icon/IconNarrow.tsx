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

const IconNarrow: FunctionComponent<Props> = ({size, color, ...rest}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M448.544 496H256a32 32 0 0 0 0 64l146.976-0.192-233.6 233.568a32 32 0 0 0 45.248 45.248l233.664-233.632v147.264a32 32 0 1 0 64 0v-192.512a63.84 63.84 0 0 0-63.744-63.744M838.624 201.376a31.968 31.968 0 0 0-45.248 0L576 418.752V272a32 32 0 0 0-64 0v192.544c0 35.136 28.608 63.712 63.744 63.712h192.512a32 32 0 1 0 0-64l-147.488 0.224 217.856-217.856a31.968 31.968 0 0 0 0-45.248"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconNarrow.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconNarrow) : IconNarrow;
