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

const IconFlipFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M657.408 512c0-88.224-71.776-160-160-160s-160 71.776-160 160 71.776 160 160 160 160-71.776 160-160"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M890.336 569.888a31.616 31.616 0 0 0-40.928-2.88V224.288a64.128 64.128 0 0 0-63.744-64.32H209.152a63.808 63.808 0 0 0-63.744 63.808v65.152a32 32 0 1 0 64 0l-0.256-64.96 576.256 0.32v341.12a31.584 31.584 0 0 0-38.592 4.48 31.968 31.968 0 0 0 0 45.248l49.152 49.152a31.904 31.904 0 0 0 45.248 0l49.152-49.152a32 32 0 0 0 0-45.248M817.408 704.064a32 32 0 0 0-32 32L785.664 800l-576.256-0.32V462.72a31.648 31.648 0 0 0 16.864 5.568 32 32 0 0 0 22.656-54.624l-49.12-49.152a32 32 0 0 0-45.28 0l-49.152 49.152a31.968 31.968 0 0 0 0 45.248c10.944 10.976 27.616 11.712 40 3.456V799.68c0 35.488 28.64 64.32 63.776 64.32h576.512a63.904 63.904 0 0 0 63.744-63.936v-64a32 32 0 0 0-32-32"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconFlipFill.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconFlipFill) : IconFlipFill;
