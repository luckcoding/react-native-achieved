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

const IconLiveFill: FunctionComponent<Props> = ({size, color, ...rest}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M626.976 590.08l-160 117.728a31.936 31.936 0 0 1-44.736-6.816 31.424 31.424 0 0 1-3.968-29.12 31.904 31.904 0 0 1-2.272-11.2v-192c0-2.72 0.896-5.152 1.568-7.68a31.424 31.424 0 0 1 4.16-26.624c10.176-14.432 30.08-18.016 44.576-7.936l160 111.616a32 32 0 0 1 0.64 52.032M800.32 260.672h-188.8l40.064-87.36c7.36-16.032 0.32-35.04-15.744-42.432a32.064 32.064 0 0 0-42.432 15.776l-52.32 114.016H459.52l-52.288-114.016A32.096 32.096 0 0 0 364.8 130.88a32.096 32.096 0 0 0-15.776 42.464l40.064 87.328H223.744a63.968 63.968 0 0 0-63.744 64v480c0 35.296 28.608 64 63.744 64h576.544a63.936 63.936 0 0 0 63.68-64v-480c0-35.264-28.544-64-63.68-64"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconLiveFill.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconLiveFill) : IconLiveFill;
