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

const IconDocumentFill: FunctionComponent<Props> = ({size, color, ...rest}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M833.728 340.128l-163.904-178.144c-7.744-8.448-18.4-15.552-29.824-21.28v211.2l202.4 0.064c-2.752-4.192-5.536-8.448-8.64-11.84"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M640 576h-256a32 32 0 1 1 0-64h256a32 32 0 1 1 0 64m0 160h-256a32 32 0 1 1 0-64h256a32 32 0 1 1 0 64m223.808-320h-223.744A64.128 64.128 0 0 1 576 351.872V128H223.808A64 64 0 0 0 160 192.064v639.84A64 64 0 0 0 223.744 896h576.512A64 64 0 0 0 864 831.84V417.632c0-0.544-0.16-1.12-0.192-1.664"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconDocumentFill.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconDocumentFill) : IconDocumentFill;
