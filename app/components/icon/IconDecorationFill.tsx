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

const IconDecorationFill: FunctionComponent<Props> = ({
  size,
  color,
  ...rest
}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M413.39904 204.1856c-33.56672 0-43.31008 2.74432-68.46464 10.69056-25.19552 7.94112-18.63168 16.6144-5.53984 29.70624 13.13792 13.17888 76.23168 79.02208 76.23168 79.02208a27.68896 27.68896 0 0 1-0.73216 39.06048L335.49312 439.23456a27.71968 27.71968 0 0 1-39.06048-0.6912S230.93248 370.2528 221.35808 360.72448c-9.52832-9.5744-23.95136-21.33504-31.97952-0.60416-7.98208 20.73088-12.83072 40.13568-12.83072 75.15648 0 127.65696 106.02496 231.10144 236.81024 231.10144 130.83136 0 236.89728-103.44448 236.89728-231.10144 0-127.60064-106.06592-231.0912-236.85632-231.0912z m289.23392 417.2032c13.49632 13.44512 128.27648 128.32256 128.27648 128.32256s17.21856 16.20992 16.54784 31.616c-0.67072 15.45216-17.024 29.66528-17.024 29.66528l-60.416 55.88992s-10.10688 10.25024-28.32384 10.25024-34.66752-16.49664-34.66752-16.49664-118.784-119.26528-131.89632-132.3264c-4.5312-4.00384-5.8624-17.408 3.29216-21.9392 9.15456-5.67296 39.6288-22.89152 59.61216-42.86976 16.40448-16.26112 25.46176-29.70624 35.33824-43.29984 7.18336-11.78624 18.44224-9.63584 29.2608 1.18784z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconDecorationFill.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconDecorationFill) : IconDecorationFill;