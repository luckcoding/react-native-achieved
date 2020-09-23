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

const IconActivityFill: FunctionComponent<Props> = ({
  size,
  color,
  ...rest
}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M799.84 144H672V128a32 32 0 0 0-64 0v16h-192V128a32 32 0 0 0-64 0v16H223.712C188.576 144 160 174.016 160 210.912V304h704V210.912c0-36.896-28.768-66.912-64.16-66.912M640 496a32 32 0 0 1 0 64h-256a32 32 0 0 1 0-64h256z m-288 192a32 32 0 0 1 32-32h256a32 32 0 0 1 0 64h-256a32 32 0 0 1-32-32z m480-320H160v477.12c0 36.864 28.608 66.88 63.744 66.88h576.512c35.136 0 63.744-30.016 63.744-66.88V368h-32z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconActivityFill.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconActivityFill) : IconActivityFill;
