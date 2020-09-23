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

const IconEmojiFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M712.32 624a224.8 224.8 0 0 1-193.984 112 224.928 224.928 0 0 1-194.048-111.936 32 32 0 1 1 55.392-32.064 160.736 160.736 0 0 0 138.656 80 160.608 160.608 0 0 0 138.592-80 32 32 0 0 1 55.392 32zM352 384a32 32 0 1 1 64 0v96a32 32 0 1 1-64 0v-96z m256 0a32 32 0 1 1 64 0v96a32 32 0 1 1-64 0v-96z m-96-256C300.256 128 128 300.32 128 512c0 211.744 172.256 384 384 384 211.712 0 384-172.256 384-384 0-211.712-172.288-384-384-384z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconEmojiFill.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconEmojiFill) : IconEmojiFill;
