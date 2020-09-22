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

const IconFlip: FunctionComponent<Props> = ({size, color, ...rest}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M401.408 512c0-52.928 43.072-96 96-96s96 43.072 96 96-43.072 96-96 96-96-43.072-96-96m256 0c0-88.224-71.776-160-160-160s-160 71.776-160 160 71.776 160 160 160 160-71.776 160-160"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M890.336 569.888a31.584 31.584 0 0 0-40.928-2.88V224.288a64.128 64.128 0 0 0-63.744-64.32H209.12a63.776 63.776 0 0 0-63.68 63.776v65.152a32 32 0 1 0 64 0L209.088 224l576.32 0.288V565.44a31.52 31.52 0 0 0-38.624 4.416 31.968 31.968 0 0 0 0 45.248l49.12 49.152a31.968 31.968 0 0 0 45.248 0l49.152-49.152a31.968 31.968 0 0 0 0-45.248M817.408 704.064a32 32 0 0 0-32 32L785.664 800l-576.256-0.32V462.72a31.648 31.648 0 0 0 16.864 5.568 31.968 31.968 0 0 0 22.624-54.624L199.776 364.48a32 32 0 0 0-45.248 0l-49.152 49.152a31.968 31.968 0 0 0 0 45.248 31.552 31.552 0 0 0 40 3.456V799.68c0 35.456 28.64 64.32 63.776 64.32h576.512a63.936 63.936 0 0 0 63.744-64v-64a32 32 0 0 0-32-32"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconFlip.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconFlip) : IconFlip;
