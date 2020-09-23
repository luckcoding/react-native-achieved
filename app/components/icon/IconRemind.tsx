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

const IconRemind: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M612.576 718.56H244.896c20.96-44.448 49.184-112.64 49.184-157.984v-160.64C294.08 285.216 391.84 192 512 192c120.16 0 217.92 93.248 217.92 207.904v158.336c0 45.952 28.448 115.36 49.44 160.32h-166.784z m-100.576 96c-24.704 0-46.08-12.96-57.728-32h115.456c-11.648 19.04-33.024 32-57.728 32z m346.144-81.056l2.24-1.088c-17.664-33.12-63.424-128.96-63.424-174.176v-158.336C796.96 249.984 669.12 128 512 128c-157.12 0-284.96 121.984-284.96 271.904v160.672c0 39.52-38.848 126.272-63.328 171.68l2.24 1.12a30.24 30.24 0 0 0-5.952 17.184c0 17.664 15.04 32 33.536 32h189.12c15.008 55.04 67.072 96 129.344 96 62.272 0 114.336-40.96 129.344-96h189.12c18.528 0 33.536-14.336 33.536-32a30.4 30.4 0 0 0-5.856-17.056z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconRemind.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconRemind) : IconRemind;
