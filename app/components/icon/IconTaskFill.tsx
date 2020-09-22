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

const IconTaskFill: FunctionComponent<Props> = ({size, color, ...rest}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M666.304 473.536l-175.616 192c-6.08 6.624-14.656 10.4-23.648 10.4h-0.16a32.064 32.064 0 0 1-23.68-10.688l-85.728-96a32 32 0 1 1 47.744-42.624l62.112 69.6 151.712-165.888a32.032 32.032 0 0 1 47.264 43.2m133.568-312.32H736c-0.064 0 0 20.544 0 32.32v63.36a64.16 64.16 0 0 1-63.808 64.384h-320.32A64.16 64.16 0 0 1 288 256.928v-63.36c0-11.84-0.128-21.472-0.128-32.32H223.744A63.808 63.808 0 0 0 160 224.96v576.512c0 35.168 28.576 63.744 63.744 63.744H800.32A63.808 63.808 0 0 0 864 801.504V224.96c0-35.136-28.8-63.744-64.128-63.744"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M668.608 149.44a42.56 42.56 0 0 0-36.8-21.44H395.84c-15.776 0-29.44 8.64-36.864 21.408a43.136 43.136 0 0 0-6.016 21.728v42.496c0 23.84 19.2 43.2 42.88 43.2h235.968c23.616 0 42.816-19.36 42.816-43.2V171.136c0-8-2.272-15.264-6.016-21.696"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconTaskFill.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconTaskFill) : IconTaskFill;
