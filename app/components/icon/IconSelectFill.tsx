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

const IconSelectFill: FunctionComponent<Props> = ({size, color, ...rest}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M808.384 565.248c15.008-14.72 20.416-32.928 14.848-49.984-5.568-16.96-20.64-28.48-41.312-31.488l-144.352-21.12c-6.944-1.056-18.4-9.472-21.504-15.776l-64.544-131.84c-9.28-18.944-24.864-29.76-42.816-29.76s-33.536 10.816-42.816 29.76l-64.576 131.84c-3.104 6.336-14.528 14.752-21.472 15.744l-144.352 21.152c-20.736 3.04-35.84 14.56-41.344 31.552-5.568 17.056-0.128 35.264 14.848 49.92l104.448 102.592c5.056 4.992 9.472 18.752 8.288 25.824l-24.672 144.832c-2.816 16.48 0.64 31.488 9.792 42.304 8.224 9.728 20 15.104 33.152 15.104 8.64 0 17.536-2.336 26.4-7.04l129.12-68.416c4.576-2.432 21.76-2.432 26.336 0l129.152 68.416c22.144 11.712 45.856 8.096 59.52-8.064 9.12-10.816 12.576-25.824 9.76-42.304l-24.64-144.8c-1.184-7.104 3.2-20.864 8.288-25.856l104.448-102.592zM301.248 401.344a32 32 0 0 0 32-32V200.64a32 32 0 0 0-64 0v168.704a32 32 0 0 0 32 32M429.248 305.344a32 32 0 0 0 32-32V200.64a32 32 0 0 0-64 0v72.704a32 32 0 0 0 32 32M589.248 305.344a32 32 0 0 0 32-32V200.64a32 32 0 0 0-64 0v72.704a32 32 0 0 0 32 32M717.248 392.64a32 32 0 0 0 32-32V192a32 32 0 0 0-64 0v168.64a32 32 0 0 0 32 32"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconSelectFill.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconSelectFill) : IconSelectFill;
