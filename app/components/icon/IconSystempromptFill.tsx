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

const IconSystempromptFill: FunctionComponent<Props> = ({
  size,
  color,
  ...rest
}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M746.912 309.856a30.4 30.4 0 0 0-42.112 9.312 31.424 31.424 0 0 0 8.896 42.976c1.088 0.736 10.4 7.264 22.304 20.32 24.256 26.624 59.52 80.736 59.52 171.36 0 94.112-36.32 148.992-59.52 174.464-10.176 11.2-17.888 16.768-18.784 17.408a31.36 31.36 0 0 0-8.512 43.168c5.888 8.96 15.616 13.824 25.536 13.824 0.576 0 1.184-0.224 1.76-0.256a30.464 30.464 0 0 0 15.2-4.96c4.32-2.912 105.632-73.376 105.632-243.68 0-170.592-105.408-241.024-109.92-243.936"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M651.488 401.216a30.304 30.304 0 0 0-40.416 14.624 31.552 31.552 0 0 0 13.984 41.504c1.92 1.024 47.872 25.216 47.872 94.208 0 73.664-42.944 98.08-44.352 98.88a31.328 31.328 0 0 0-13.76 41.76 30.656 30.656 0 0 0 41.184 13.952c3.168-1.664 78.208-41.056 78.208-154.592 0-109.568-79.36-148.704-82.72-150.336M550.016 195.392a43.84 43.84 0 0 0-10.176-2.88c-10.176-1.6-25.056-0.256-40.992 14.272l-34.624 31.456-16.224 14.752-101.632 92.384H223.712a63.936 63.936 0 0 0-63.712 64v205.504c0 35.264 28.608 64 63.712 64h85.632L448 804.928l50.848 46.208c12.864 11.648 25.024 14.912 34.592 14.912 2.4 0 4.352-0.416 6.4-0.768a44.48 44.48 0 0 0 10.272-2.688c7.808-3.456 25.888-14.784 25.888-45.408V240.672c0-0.864-0.256-1.6-0.288-2.432-0.736-19.936-10.08-35.904-25.696-42.848"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconSystempromptFill.defaultProps = {
  size: 24,
};

export default React.memo
  ? React.memo(IconSystempromptFill)
  : IconSystempromptFill;
