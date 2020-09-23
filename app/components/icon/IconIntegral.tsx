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

const IconIntegral: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M809.856 424.704l-306.88 372.288L196.16 424.96c-3.68-4.48-5.44-16.64-3.2-22.08l56.544-136.832c1.856-4.512 10.144-10.048 15.04-10.048h476.992c4.8 0 13.216 5.632 15.04 10.048l56.544 136.64c2.336 5.632 0.64 17.344-3.2 22.016m62.336-46.496L815.68 241.536C803.936 213.312 772.064 192 741.504 192H264.48c-30.592 0-62.496 21.344-74.176 49.632L133.76 378.464c-11.2 27.136-5.632 64.608 12.992 87.2l311.104 377.216c11.52 13.92 27.968 21.92 45.12 21.92h0.032c17.184 0 33.632-8.032 45.12-21.952l311.104-377.44c18.944-22.944 24.384-59.616 12.992-87.2"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M615.008 384h-224a32 32 0 0 0 0 64h224a32 32 0 0 0 0-64"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconIntegral.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconIntegral) : IconIntegral;
