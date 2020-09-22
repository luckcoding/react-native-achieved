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

const IconIntegralFill: FunctionComponent<Props> = ({size, color, ...rest}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M615.04 448h-224a32 32 0 0 1 0-64h224a32 32 0 0 1 0 64m257.184-69.792L815.68 241.536a72.064 72.064 0 0 0-8.64-14.816V224h-2.048c-15.264-19.008-39.68-32-63.488-32H264.48c-23.776 0-48.224 12.96-63.456 32H199.04v2.752a70.4 70.4 0 0 0-8.704 14.88L133.76 378.464c-11.2 27.136-5.632 64.608 12.992 87.2l52.256 63.36L264.16 608l193.696 234.88c11.52 13.92 27.968 21.92 45.12 21.92h0.032c17.184 0 33.632-8.032 45.12-21.952L741.76 608l65.28-79.232 52.224-63.36c18.944-22.944 24.384-59.616 12.992-87.2"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconIntegralFill.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconIntegralFill) : IconIntegralFill;
