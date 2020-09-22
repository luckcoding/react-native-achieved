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

const IconMessageFill: FunctionComponent<Props> = ({size, color, ...rest}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M688 544a48 48 0 1 1 0-96 48 48 0 0 1 0 96M512 544a48 48 0 1 1 0-96 48 48 0 0 1 0 96m-176 0a48 48 0 1 1-0.032-95.968A48 48 0 0 1 336 544M805.312 192H218.688C186.336 192 160 219.488 160 253.248v471.392c0 33.792 26.4 61.248 58.816 61.248h189.344c5.888 0 15.648 5.728 18.304 10.752l38.08 71.968 2.912 4.544c11.136 14.496 27.36 22.816 44.48 22.848h0.032c17.152 0 33.376-8.32 44.576-22.816l40.992-76.544c2.432-4.576 11.936-10.752 18.336-10.752h189.504c32.32 0 58.624-27.456 58.624-61.248V253.248C864 219.488 837.664 192 805.312 192"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconMessageFill.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconMessageFill) : IconMessageFill;
