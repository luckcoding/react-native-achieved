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

const IconCommodity: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M800.256 281.6h-128c0-88.064-71.68-159.744-159.744-159.744S352.256 193.536 352.256 281.6h-128c-35.328 0-63.488 28.672-64 64v476.672c0 35.328 28.672 64 64 64h576.512c35.328 0 63.488-28.672 64-64V345.6c-1.024-35.328-29.184-64-64.512-64zM512 180.224c52.736 0 96.256 43.008 96.256 96.256H415.744c0-52.736 43.52-96.256 96.256-96.256zM224.256 826.88v-486.4h128v80.384c-19.456 11.264-32.768 32.256-32.768 56.32 0 35.84 29.184 64.512 64.512 64.512s64.512-29.184 64.512-64.512c0-24.064-13.312-45.056-32.768-56.32V340.48h192v80.384c-19.456 11.264-32.768 32.256-32.768 56.32 0 35.84 29.184 64.512 64.512 64.512s64.512-29.184 64.512-64.512c0-24.064-13.312-45.056-32.768-56.32V340.48h128v486.4H224.256z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconCommodity.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconCommodity) : IconCommodity;
