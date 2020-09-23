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

const IconSystemprompt: FunctionComponent<Props> = ({
  size,
  color,
  ...rest
}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M746.88 309.888a30.272 30.272 0 0 0-42.112 9.344 31.424 31.424 0 0 0 8.896 42.944c3.296 2.24 81.824 56.576 81.824 191.68 0 135.456-75.328 189.824-78.304 191.872a31.36 31.36 0 0 0-8.512 43.2 30.496 30.496 0 0 0 42.496 8.576c4.32-2.88 105.632-73.376 105.632-243.68 0-170.56-105.408-241.024-109.92-243.936"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M651.456 401.28a30.304 30.304 0 0 0-40.416 14.592 31.552 31.552 0 0 0 13.984 41.504c1.952 1.024 47.872 25.216 47.872 94.208 0 73.664-42.944 98.08-44.352 98.88a31.328 31.328 0 0 0-13.728 41.76 30.656 30.656 0 0 0 41.152 13.952c3.2-1.664 78.208-41.056 78.208-154.56 0-109.6-79.36-148.736-82.72-150.368M512 776.672l-64-58.176-104.768-95.264a32.064 32.064 0 0 0-21.568-8.32L224 614.944l-0.32-205.504h128.576c9.856 1.824 19.968-1.024 27.424-7.776l68.288-62.112 64-58.176v495.296z m38.016-581.216c-7.84-3.456-28.512-9.248-51.2 11.392L448 253.056l-101.632 92.384H223.68A63.936 63.936 0 0 0 160 409.408v205.536c0 35.264 28.576 63.968 63.68 63.968h85.632L448 804.992l50.88 46.24c12.832 11.648 24.992 14.912 34.56 14.912 7.392 0 13.28-1.952 16.672-3.456 7.808-3.456 25.92-14.784 25.92-45.408V240.736c0-21.152-9.728-38.048-26.016-45.28z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconSystemprompt.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconSystemprompt) : IconSystemprompt;
