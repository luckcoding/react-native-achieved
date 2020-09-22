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

const IconComputerFill: FunctionComponent<Props> = ({size, color, ...rest}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M221.216 588H160v75.712c0 35.456 27.424 64.288 61.184 64.288h260.192v52h-91.808c-16.896 0-30.624 14.336-30.624 32 0 17.696 13.728 32 30.624 32h244.864c16.896 0 30.624-14.304 30.624-32 0-17.664-13.728-32-30.624-32h-91.808V728h260.192c33.76 0 61.184-28.832 61.184-64.288v-75.712H221.216zM802.816 160H221.184C187.424 160 160 188.864 160 224.32v299.68h704V224.32C864 188.864 836.576 160 802.816 160"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconComputerFill.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconComputerFill) : IconComputerFill;
