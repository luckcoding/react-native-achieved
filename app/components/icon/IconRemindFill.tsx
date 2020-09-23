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

const IconRemindFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 878.56c48.96 0 91.296-25.504 114.56-63.04h-229.12a134.304 134.304 0 0 0 114.56 63.04M858.144 733.504l2.24-1.088c-17.664-33.12-63.424-128.992-63.424-174.176v-158.336C796.96 249.984 669.12 128 512 128c-157.12 0-284.928 121.984-284.928 271.904v160.672c0 39.52-38.88 126.272-63.36 171.68l2.24 1.12a30.24 30.24 0 0 0-5.952 17.184c0 17.664 15.04 32 33.536 32h160.48v-1.056H696v1.056h134.496c18.496 0 33.504-14.336 33.504-32 0-6.4-2.464-12.032-5.856-17.056"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconRemindFill.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconRemindFill) : IconRemindFill;
