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

const IconMineFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 832a318.432 318.432 0 0 1-215.648-84.256C351.264 729.984 443.008 704 509.952 704c68.064 0 162.048 26.976 216.608 44.704A318.24 318.24 0 0 1 512 832z m-160-324.672v-91.264A160.224 160.224 0 0 1 512 256c88.224 0 160 71.808 160 160.064v95.104c0 10.24-1.184 20.192-3.008 29.888l-0.928 4.576a159.296 159.296 0 0 1-22.528 53.28l-1.984 2.944a163.2 163.2 0 0 1-41.056 40.96l-2.016 1.376a159.136 159.136 0 0 1-88.48 26.816 159.232 159.232 0 0 1-88.672-26.88l-1.792-1.248a162.144 162.144 0 0 1-41.12-41.024l-2.048-3.04a159.264 159.264 0 0 1-22.432-53.184l-0.928-4.608a160.896 160.896 0 0 1-3.008-29.856v-3.84zM512 128C300.256 128 128 300.256 128 512s172.256 384 384 384 384-172.256 384-384S723.744 128 512 128z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconMineFill.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconMineFill) : IconMineFill;
