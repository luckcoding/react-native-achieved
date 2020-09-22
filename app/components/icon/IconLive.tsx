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

const IconLive: FunctionComponent<Props> = ({size, color, ...rest}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M480 618.784v-104.704l73.056 50.976L480 618.784z m146.304-80.672l-160-111.68a32 32 0 0 0-44.544 8 31.488 31.488 0 0 0-4.224 26.624c-0.64 2.528-1.536 4.96-1.536 7.68v192c0 3.936 0.928 7.68 2.272 11.2a31.36 31.36 0 0 0 3.936 29.088 32 32 0 0 0 44.768 6.784l160-117.696a32.032 32.032 0 0 0-0.672-52z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M224 804.704v-480h576l0.256 480H224z m576.256-544h-188.8l40.096-87.36a32 32 0 1 0-58.208-26.688l-52.288 114.048H459.52l-52.32-114.048a32 32 0 1 0-58.176 26.688l40.064 87.36H223.744a63.936 63.936 0 0 0-63.744 64v480c0 35.296 28.608 64 63.744 64h576.512a63.936 63.936 0 0 0 63.744-64v-480c0-35.296-28.608-64-63.744-64z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconLive.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconLive) : IconLive;
