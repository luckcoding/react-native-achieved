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

const IconSetup: FunctionComponent<Props> = ({size, color, ...rest}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M825.312 566.816a127.04 127.04 0 0 0-91.616 62.624 127.232 127.232 0 0 0-8.448 110.56 318.976 318.976 0 0 1-113.216 65.472A127.072 127.072 0 0 0 512 757.44a127.2 127.2 0 0 0-100.064 48 319.232 319.232 0 0 1-113.216-65.44 127.232 127.232 0 0 0-8.416-110.56 127.04 127.04 0 0 0-91.648-62.624 323.232 323.232 0 0 1 0-130.784 127.104 127.104 0 0 0 91.648-62.592 127.296 127.296 0 0 0 8.416-110.592 318.976 318.976 0 0 1 113.216-65.472A127.232 127.232 0 0 0 512 245.44c39.712 0 76.064-17.92 100.032-48.064a318.72 318.72 0 0 1 113.216 65.472 127.328 127.328 0 0 0 8.448 110.592 127.104 127.104 0 0 0 91.616 62.592 321.536 321.536 0 0 1 0 130.784m56.16-170.304a31.776 31.776 0 0 0-32.832-23.2 63.584 63.584 0 0 1-59.52-31.872 63.744 63.744 0 0 1 2.112-67.52 32 32 0 0 0-3.68-39.936 383.392 383.392 0 0 0-181.696-104.992 31.968 31.968 0 0 0-36.48 16.832A63.68 63.68 0 0 1 512 181.44a63.68 63.68 0 0 1-57.376-35.616 32 32 0 0 0-36.48-16.832 383.264 383.264 0 0 0-181.696 104.96 32 32 0 0 0-3.712 40 63.68 63.68 0 0 1 2.112 67.488 63.68 63.68 0 0 1-59.52 31.872 31.52 31.52 0 0 0-32.8 23.2A383.136 383.136 0 0 0 128 501.44c0 35.648 4.864 70.944 14.528 104.896a31.904 31.904 0 0 0 32.8 23.2 64.032 64.032 0 0 1 59.52 31.904c12.256 21.184 11.456 47.04-2.112 67.456a32 32 0 0 0 3.712 39.968 382.88 382.88 0 0 0 181.696 104.96 31.936 31.936 0 0 0 36.48-16.8A63.648 63.648 0 0 1 512 821.44c24.512 0 46.496 13.632 57.376 35.584a32 32 0 0 0 36.48 16.832 383.04 383.04 0 0 0 181.696-104.992 32 32 0 0 0 3.68-40 63.68 63.68 0 0 1-2.112-67.424 63.136 63.136 0 0 1 59.52-31.904c15.04 0.896 28.704-8.736 32.832-23.2A384.64 384.64 0 0 0 896 501.44c0-35.648-4.896-70.944-14.528-104.96"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M512 597.44c-52.928 0-96-43.104-96-96 0-52.96 43.072-96 96-96s96 43.04 96 96c0 52.896-43.072 96-96 96m0-256c-88.224 0-160 71.744-160 160 0 88.224 71.776 160 160 160s160-71.808 160-160c0-88.256-71.776-160-160-160"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconSetup.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconSetup) : IconSetup;
