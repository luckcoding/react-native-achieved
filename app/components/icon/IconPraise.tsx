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

const IconPraise: FunctionComponent<Props> = ({size, color, ...rest}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M819.36 439.584l-75.904 354.176c-0.576 2.688-5.088 6.24-7.296 6.24L352 799.84V416h2.88v-1.056A176.224 176.224 0 0 0 512 240V224a32.032 32.032 0 0 1 64 0h2.048c6.336 32.8 11.968 106.496-23.872 139.904A32 32 0 0 0 576 419.328c4.64 0 9.152-1.344 13.44-3.328h210.24c7.424 0 13.376 2.336 16.832 6.592 3.296 4.096 4.32 10.144 2.848 16.992zM192.192 416H288v383.808H192L192.192 416z m674.08-33.664c-15.584-19.296-39.872-30.336-66.592-30.336h-164.992c23.168-67.2 5.376-145.024 4.352-149.312a30.944 30.944 0 0 0-4.928-10.656 95.808 95.808 0 0 0-90.112-64 95.84 95.84 0 0 0-95.456 90.688H448V240c0 61.76-50.24 112-112 112H192.192C156.8 352 128 380.8 128 416.224v383.552C128 835.2 156.64 864 191.84 864h544.32c32.352 0 63.04-24.96 69.888-56.8l75.904-354.208c5.504-25.76-0.192-51.488-15.68-70.656z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconPraise.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconPraise) : IconPraise;
