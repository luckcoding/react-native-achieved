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

const IconPictureFill: FunctionComponent<Props> = ({
  size,
  color,
  ...rest
}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M799.936 721.984V800l-407.648 0.16 0.064-0.032-90.496 0.032 0.96-0.96 332.448-317.952 164.704 150.24v90.496zM416 320c52.96 0 96 43.072 96 96s-43.04 96-96 96c-52.928 0-96-43.072-96-96s43.072-96 96-96zM800.32 160H223.744A63.776 63.776 0 0 0 160 223.744v576.512C160 835.392 188.576 864 223.744 864H800.32A63.84 63.84 0 0 0 864 800.256V223.744A63.808 63.808 0 0 0 800.32 160z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconPictureFill.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconPictureFill) : IconPictureFill;
