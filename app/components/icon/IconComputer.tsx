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

const IconComputer: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M221.216 663.68v-75.68h581.6v76l-581.6-0.32zM802.784 224.32v299.68H221.248V224l581.568 0.32z m0-64.32H221.216C187.424 160 160 188.864 160 224.32v439.36c0 35.488 27.424 64.32 61.184 64.32h260.192v52h-91.84c-16.864 0-30.592 14.336-30.592 32 0 17.696 13.728 32 30.624 32h244.864c16.896 0 30.624-14.304 30.624-32 0-17.664-13.728-32-30.624-32h-91.84V728h260.224c33.76 0 61.184-28.832 61.184-64.32V224.32C864 188.864 836.576 160 802.816 160z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconComputer.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconComputer) : IconComputer;
