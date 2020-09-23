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

const IconHeadlinesFill: FunctionComponent<Props> = ({
  size,
  color,
  ...rest
}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M768 512h-192v-192h192v192z m-320 32a32 32 0 0 1-32 32H288a32 32 0 0 1 0-64h128c8.544 0 16.192 3.456 21.92 8.896A31.776 31.776 0 0 1 448 544z m128 128a32 32 0 0 1-32 32H288a32 32 0 0 1 0-64h256c8.544 0 16.192 3.456 21.92 8.896A31.776 31.776 0 0 1 576 672z m255.904-480H192.064A64 64 0 0 0 128 255.776v512.448c0 8.064 1.664 15.712 4.416 22.816 0.256 0.64 0.352 1.344 0.608 1.984 0.768 1.792 1.888 3.392 2.816 5.12 1.024 1.92 1.888 3.936 3.104 5.696 0.64 0.96 1.472 1.696 2.144 2.592 1.792 2.368 3.584 4.8 5.696 6.848 0.992 0.992 2.176 1.728 3.2 2.656 2.048 1.792 4.032 3.648 6.304 5.152 0.448 0.32 1.024 0.512 1.504 0.832 2.976 1.92 6.048 3.68 9.376 5.056 3.232 1.376 6.688 2.336 10.176 3.136 0.608 0.16 1.184 0.448 1.824 0.576 4.16 0.864 8.48 1.312 12.928 1.312h639.84A64 64 0 0 0 896 768.224V255.808A64 64 0 0 0 831.904 192z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconHeadlinesFill.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconHeadlinesFill) : IconHeadlinesFill;
