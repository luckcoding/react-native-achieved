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

const IconMessage: FunctionComponent<Props> = ({size, color, ...rest}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M800 704v17.888h-184.128c-29.664 0-61.184 18.848-74.912 44.832L512 821.44l-28.96-54.752c-13.728-25.952-45.248-44.8-74.912-44.8H224V256h576v448z m5.312-512H218.688C186.336 192 160 219.488 160 253.248v471.392c0 33.76 26.4 61.248 58.816 61.248h189.312c5.92 0 15.712 5.728 18.368 10.752l38.048 71.968 2.912 4.544c11.168 14.528 27.392 22.848 44.544 22.848 17.152 0 33.376-8.32 44.544-22.848l40.96-76.512c2.464-4.608 11.968-10.752 18.368-10.752h189.472c32.352 0 58.656-27.488 58.656-61.248V253.248C864 219.488 837.664 192 805.312 192z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M336 448c-12.352 0-23.488 4.8-32 12.448A47.68 47.68 0 0 0 288 496c0 14.176 6.24 26.752 16 35.552a47.68 47.68 0 0 0 32 12.448 48 48 0 0 0 0-96M688 448a48 48 0 0 0 0 96c12.352 0 23.488-4.8 32-12.448 9.76-8.8 16-21.376 16-35.552a47.68 47.68 0 0 0-16-35.552 47.68 47.68 0 0 0-32-12.448M512 448c-12.352 0-23.488 4.8-32 12.448a47.68 47.68 0 0 0-16 35.552c0 14.176 6.24 26.752 16 35.552A47.68 47.68 0 0 0 512 544c12.352 0 23.488-4.8 32-12.448 9.76-8.8 16-21.376 16-35.552a47.68 47.68 0 0 0-16-35.552A47.68 47.68 0 0 0 512 448"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconMessage.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconMessage) : IconMessage;
