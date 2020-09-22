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

const IconQuestions: FunctionComponent<Props> = ({size, color, ...rest}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M182.784 323.584l-11.264 18.432c1.024-2.048 3.072-3.584 4.096-5.632l1.536-3.072 5.632-9.728z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M500.224 272.896l229.888 129.024c-6.144 2.56-11.776 5.12-17.92 8.704l-214.528 125.952L264.192 404.48l236.032-131.584m0-71.68c-5.632 0-11.776 1.536-16.384 5.12l-304.128 168.96c-3.072 1.536-6.144 4.096-8.704 7.168-8.192 9.216-11.776 18.432-10.24 28.16 1.024 7.168 5.632 12.8 11.264 17.408 4.096 3.072 9.216 6.656 13.312 8.704L481.28 604.16c5.12 3.072 10.752 5.12 16.384 5.12s11.776-1.536 16.384-5.12l231.936-135.68c7.168-4.096 13.824-6.144 19.968-6.144 8.192 0 15.872 4.096 21.504 12.8 0.512 0.512 1.024 1.024 2.048 2.56 2.56 3.584 4.608 14.336 4.608 19.968v135.168c0 19.968 17.92 33.28 37.888 33.28 19.968 0 33.28-13.312 33.28-32.768V421.888c0-13.312-6.656-23.04-16.384-29.696L517.12 206.336c-5.12-3.584-10.752-5.12-16.896-5.12z m287.232 273.408zM307.2 608.256c-11.264 0-21.504 6.656-28.16 17.92-0.512 1.024-1.024 1.536-1.536 2.56-2.56 3.584-2.56 10.24-2.56 16.384v16.896c0 13.824 6.656 24.576 15.872 31.232l193.536 120.32c4.608 3.584 10.24 5.12 15.872 5.12s11.264-1.536 15.872-5.12l193.536-120.32c9.728-7.168 15.872-17.408 15.872-31.232V645.12c0-20.992-12.8-34.816-32.256-34.816-6.656 0-9.728 0-15.872 3.584L516.096 716.8c-4.608 3.584-10.24 5.12-15.872 5.12s-11.264-1.536-15.872-5.12l-161.28-102.912c-5.12-4.096-10.752-5.632-15.872-5.632z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconQuestions.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconQuestions) : IconQuestions;