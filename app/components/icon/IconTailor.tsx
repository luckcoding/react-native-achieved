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

const IconTailor: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M831.554975 672.349434H735.713162v-351.420148c0-17.642795-14.304305-31.9471-31.9471-31.9471H352.345402v-95.841812c0-17.642795-14.304305-31.9471-31.9471-31.947101s-31.9471 14.304305-31.9471 31.947101v95.841812h-95.841812c-17.642795 0-31.9471 14.304305-31.9471 31.9471s14.304305 31.9471 31.9471 31.9471H288.45069v351.420148c0 17.642795 14.304305 31.9471 31.9471 31.9471h351.420148v95.841812c0 17.642795 14.304305 31.9471 31.9471 31.9471s31.9471-14.304305 31.9471-31.9471V736.244146h95.841813c17.642795 0 31.9471-14.304305 31.9471-31.9471s-14.303281-31.947612-31.946076-31.947612z m-479.209573 0v-319.473048h319.473048v319.473048H352.345402z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconTailor.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconTailor) : IconTailor;
