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

const IconDocument: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M224 831.936V192.096L223.808 192H576v159.936c0 35.328 28.736 64.064 64.064 64.064h159.712c0.032 0.512 0.224 1.184 0.224 1.664L800.256 832 224 831.936zM757.664 352L640 351.936V224.128L757.664 352z m76.064-11.872l-163.872-178.08C651.712 142.336 619.264 128 592.672 128H223.808A64.032 64.032 0 0 0 160 192.096v639.84A64 64 0 0 0 223.744 896h576.512A64 64 0 0 0 864 831.872V417.664c0-25.856-12.736-58.464-30.272-77.536z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M640 512h-256a32 32 0 0 0 0 64h256a32 32 0 0 0 0-64M640 672h-256a32 32 0 0 0 0 64h256a32 32 0 0 0 0-64"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconDocument.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconDocument) : IconDocument;
