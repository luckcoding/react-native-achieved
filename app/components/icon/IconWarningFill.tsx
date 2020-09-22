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

const IconWarningFill: FunctionComponent<Props> = ({size, color, ...rest}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M522.656 676.064a32 32 0 1 1 0 64 32 32 0 0 1 0-64z m-32-256a32 32 0 1 1 64 0v160a32 32 0 1 1-64 0v-160z m418.528 363.584L566.528 187.712c-10.112-17.6-26.112-27.712-43.872-27.712s-33.728 10.08-43.872 27.712L136.16 783.616c-10.112 17.6-10.816 36.512-1.92 51.84 8.864 15.36 25.568 24.16 45.76 24.16h685.344c20.224 0 36.896-8.768 45.76-24.128 8.928-15.36 8.224-34.272-1.92-51.84z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconWarningFill.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconWarningFill) : IconWarningFill;
