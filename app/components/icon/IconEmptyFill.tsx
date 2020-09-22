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

const IconEmptyFill: FunctionComponent<Props> = ({size, color, ...rest}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M821.344 197.248l-126.752 17.824-11.904-84.512a36.48 36.48 0 0 0-14.464-24.192c-16.416-12.384-41.376-11.072-54.688-9.152l-253.792 35.648c-46.624 6.56-60.16 30.688-57.312 51.072l11.008 78.24 0.896 6.336-76.128 10.688-50.656 7.136a32 32 0 1 0 8.928 63.36l23.552-3.328 18.176-2.528 4.224-0.608 50.752-7.136 63.936-8.992 73.088-10.272 192-26.976 192-27.008 16.032-2.24c17.504-2.432 29.696-18.624 27.232-36.128s-18.528-29.76-36.128-27.232zM398.208 454.208a32 32 0 0 1 64 0v210.496a32 32 0 0 1-64 0v-210.496z m192 0a32 32 0 0 1 64 0v210.496a32 32 0 0 1-64 0v-210.496z m-352-40.736v392.704c0 20.608 9.984 38.816 25.184 50.56 10.816 8.32 24.192 13.44 38.848 13.44h447.936a63.36 63.36 0 0 0 38.816-13.44c15.232-11.712 25.216-29.888 25.216-50.56V394.176H237.344l0.864 19.328z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconEmptyFill.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconEmptyFill) : IconEmptyFill;
