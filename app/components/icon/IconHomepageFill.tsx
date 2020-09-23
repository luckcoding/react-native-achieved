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

const IconHomepageFill: FunctionComponent<Props> = ({
  size,
  color,
  ...rest
}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M640 790.528H297.504v-0.096l86.496 0.032v-118.88c0-0.8 0.224-1.536 0.224-2.304 1.28-69.6 57.984-125.888 127.776-125.888s126.496 56.32 127.776 125.888c0 0.768 0.224 1.504 0.224 2.304v118.944z m240.896-427.68L800 309.856V207.168a32 32 0 1 0-64 0v60.8l-206.464-135.328A31.296 31.296 0 0 0 511.424 128a31.168 31.168 0 0 0-17.6 4.64L142.464 362.88a32 32 0 0 0 35.072 53.536L192 406.912V800c0 30.08 27.168 54.592 60.576 54.592h518.848C804.832 854.56 832 830.08 832 800V407.36l13.856 9.056a31.968 31.968 0 0 0 35.04-53.536z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconHomepageFill.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconHomepageFill) : IconHomepageFill;
