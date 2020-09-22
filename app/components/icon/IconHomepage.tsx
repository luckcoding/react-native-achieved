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

const IconHomepage: FunctionComponent<Props> = ({size, color, ...rest}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M768 790.56l-128-0.032v-118.944a128.224 128.224 0 0 0-128-128.192c-70.592 0-128 57.504-128 128.192v118.88l-128-0.032V364.992l255.68-167.52L768 365.376v425.184z m-192-0.032l-128-0.032v-118.912c0-35.392 28.704-64.192 64-64.192s64 28.8 64 64.192v118.944z m304.896-427.68L800 309.856V207.168a32 32 0 1 0-64 0v60.768l-206.464-135.296A31.296 31.296 0 0 0 511.424 128a31.168 31.168 0 0 0-17.6 4.64l-351.36 230.208a32 32 0 0 0 35.072 53.536L192 406.912v393.056c0 30.08 27.2 54.592 60.576 54.592h518.848c33.408 0 60.576-24.512 60.576-54.592v-392.64l13.856 9.056a31.968 31.968 0 0 0 35.04-53.536z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconHomepage.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconHomepage) : IconHomepage;
