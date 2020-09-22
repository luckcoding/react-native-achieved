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

const IconMarketingFill: FunctionComponent<Props> = ({
  size,
  color,
  ...rest
}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M733.31712 353.19296l127.24736-124.07296a41.50272 41.50272 0 1 0-57.46176-59.89888l-127.24224 124.07296a41.50272 41.50272 0 0 0 57.45664 59.89888z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M143.42144 568.56576c-0.82432 14.09024 4.46464 27.85792 14.10048 38.17472l235.80672 252.43136c46.85312 46.85312 88.54528 0 88.54528 0l319.07328-319.06816a83.72736 83.72736 0 0 0 24.52992-59.20256v-138.3936c0.12288-0.10752 0.01536 0 0.12288-0.10752l-53.76 53.76c-34.05824 34.06336-102.4 39.89504-142.08-1.06496-39.04-41.6-31.49824-102.47168 2.56-136.53504L689.92 204.8c-4.48 0 0.57344-0.1024-4.53632-0.1024h-156.88704c-21.83168 0-42.8032 8.5248-58.43456 23.76704l-310.61504 304.65536c-11.35616 12.29824-15.40096 24.71936-16.0256 35.44576z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconMarketingFill.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconMarketingFill) : IconMarketingFill;
