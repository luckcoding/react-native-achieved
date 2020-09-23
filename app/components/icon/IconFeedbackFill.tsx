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

const IconFeedbackFill: FunctionComponent<Props> = ({
  size,
  color,
  ...rest
}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M544 581.696v15.488a32 32 0 1 1-64 0V560c0-14.848 10.304-26.752 24-30.4 72.032-30.08 72.064-74.688 72-76.608l-0.032-49.184c0-28.544-28.704-51.84-64-51.84-35.264 0-63.968 23.296-63.968 51.84v15.584a32 32 0 0 1-64 0v-15.584c0-63.84 57.408-115.84 127.968-115.84 70.592 0 128 52 128 115.84v47.584c0.16 1.28 4.672 80.768-95.968 130.304M512 736a32 32 0 1 1 0-64 32 32 0 0 1 0 64m0-608C300.256 128 128 300.288 128 512c0 211.744 172.256 384 384 384s384-172.256 384-384c0-211.712-172.256-384-384-384"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconFeedbackFill.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconFeedbackFill) : IconFeedbackFill;
