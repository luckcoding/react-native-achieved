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

const IconAddressbook: FunctionComponent<Props> = ({
  size,
  color,
  ...rest
}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M896 320h-128a32 32 0 0 0 0 64h128a32 32 0 0 0 0-64M896 448h-128a32 32 0 0 0 0 64h128a32 32 0 0 0 0-64M768 256h128a32 32 0 0 0 0-64h-128a32 32 0 0 0 0 64"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M768 835.36H193.504c-0.416 0-0.96-0.256-1.504-0.672v-118.688c0-5.856 5.92-14.912 12.096-17.472 1.568-0.64 156.896-68.64 275.904-68.64 118.752 0 274.368 67.968 276.672 68.992 5.312 2.208 11.328 11.328 11.328 17.12v119.36z m-407.584-394.56v-104.768a112 112 0 0 1 111.776-112 112 112 0 0 1 111.744 112v104.768a112 112 0 0 1-111.744 112.064 112.064 112.064 0 0 1-111.776-112.064z m421.344 199.232c-5.12-2.272-97.216-42.56-198.72-62.752a175.904 175.904 0 0 0 64.896-136.448v-104.768C647.936 239.008 569.088 160 472.192 160c-96.928 0-175.776 78.976-175.776 176v104.8c0 56.544 26.88 106.816 68.384 139.072-96.48 20.8-181.344 57.824-185.536 59.712C150.016 651.36 128 684.224 128 716.032v131.712l1.728 5.024c9.504 27.904 35.136 46.624 63.776 46.624h572.992c33.28 0 60.832-24.864 64.96-56.96l0.544-126.4c0-31.584-21.952-64.416-50.24-76z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconAddressbook.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconAddressbook) : IconAddressbook;
