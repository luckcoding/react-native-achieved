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

const IconBrowse: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M812.896 528.896C812.16 530.944 730.816 736 504.16 736c-225.44 0-305.248-198.24-309.696-209.376-3.2-6.4-2.944-21.28 1.376-29.92C196.736 494.656 287.776 288 504.16 288c215.296 0 304.384 199.776 309.248 210.752 3.296 6.176 3.552 21.344-0.512 30.144m58.112-57.888C866.72 460.928 762.24 224 504.16 224 246.08 224 141.344 461.44 137.92 469.568c-12.704 24.896-13.056 60.896-1.984 82.752 0.96 2.496 98.048 247.68 368.224 247.68 270.144 0 367.552-245.696 367.552-246.016 11.712-24.832 10.912-61.6-0.704-82.976"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M568.16 551.968a64.064 64.064 0 0 1-64 64.032c-35.296 0-64-28.704-64-64.032v-71.904c0-35.328 28.704-64.064 64-64.064s64 28.736 64 64.064v71.904z m-64-199.968c-70.592 0-128 57.44-128 128.064v71.904a128.16 128.16 0 0 0 128 128.032c70.592 0 128-57.44 128-128.032v-71.904a128.16 128.16 0 0 0-128-128.064z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconBrowse.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconBrowse) : IconBrowse;
