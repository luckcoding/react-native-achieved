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

const IconPublishgoodsFill: FunctionComponent<Props> = ({
  size,
  color,
  ...rest
}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M874.68544 301.13792c-1.62816-2.6624-3.84512-5.17632-6.50752-7.3984s-6.0672-4.14208-9.91232-5.77024c-7.69536-3.84512-18.64192-5.77024-32.8448-5.77024H316.46208L312.32 254.53056l-3.25632-21.15584a49.3056 49.3056 0 0 0-0.73728-8.13568c0-0.14848 0-0.29696-0.14848-0.59392a128.34304 128.34304 0 0 0-3.25632-13.02016l-2.36544-7.54688c-0.59392-2.6624-1.77664-5.47328-3.25632-8.28416-2.36544-4.58752-6.0672-8.43264-10.35776-11.24352h-0.14848a54.0416 54.0416 0 0 0-27.07456-8.87808c-1.47968 0-2.95936-0.14848-4.43904-0.14848H181.82656a42.496 42.496 0 0 0-14.7968 2.51392c-1.3312 0.44544-2.6624 1.03424-3.84512 1.62816-11.24352 5.17632-18.19648 16.7168-18.34496 28.99968v0.29696c0 2.21696 0.14848 4.58752 0.44544 7.3984 0.29696 2.6624 0.73728 5.47328 1.18272 8.13568 0.59392 2.6624 1.47968 5.47328 2.81088 8.13568 0.44544 0.88576 0.88576 1.77664 1.3312 2.81088 2.21696 5.02784 5.17632 9.76384 9.17504 13.61408 2.0736 1.92512 4.14208 3.84512 6.36416 5.47328 4.43904 3.25632 10.35776 4.88448 18.048 4.88448h38.31808a21.248 21.248 0 0 1 20.85888 17.16224l28.70272 146.62144 12.27776 62.73024 10.65472 56.22272 8.28416 41.5744 4.14208 21.15584c0.88576 4.14208 2.21696 9.91232 3.9936 17.16224 1.62816 6.50752 3.9936 12.7232 7.10144 18.7904 1.92512 3.84512 3.9936 7.3984 6.21568 10.65472a56.94976 56.94976 0 0 0 16.42496 17.16224c2.21696 1.62816 4.43904 2.81088 6.95296 3.69664 2.51392 0.88576 5.17632 1.47968 8.28416 2.0736 2.95936 0.59392 6.0672 0.73728 9.46688 0.73728h405.53472c14.20288 0 23.5264-3.55328 27.96544-10.65472 4.88448-7.10144 7.3984-15.53408 7.3984-25.29792 0-20.1216-11.98592-30.1824-36.10112-30.1824H414.11072a39.84384 39.84384 0 0 1-39.20896-32.8448l-5.62176-32.256h390.74304c14.20288 0 26.33728-3.84512 36.10112-11.392 4.88448-3.84512 9.46688-9.02656 13.61408-15.83104s7.84384-14.7968 11.09504-23.96672c1.62816-4.88448 6.0672-17.60768 13.16864-38.31808l17.16224-48.08192 15.53408-44.83072 9.91232-26.92608c0.59392-1.62816 1.03424-3.25632 1.18272-4.88448 0.29696-1.62816 0.59392-3.4048 0.88576-5.3248s0.44544-3.9936 0.44544-6.0672c0.29696-6.0672-1.18272-11.68896-4.43904-17.16224zM739.16416 728.71936c-5.17632-5.62176-11.54048-9.76384-19.08736-12.57472-3.69664-1.3312-7.69536-2.51392-11.68896-3.10784a63.75936 63.75936 0 0 0-11.68896-1.03424c-2.81088 0-5.47328 0.14848-8.13568 0.29696a46.976 46.976 0 0 0-7.69536 1.47968c-2.6624 0.73728-5.02784 1.47968-7.3984 2.51392-3.25632 1.47968-6.656 3.10784-9.91232 5.3248a36.95104 36.95104 0 0 0-8.43264 7.3984c-5.62176 5.62176-9.91232 11.68896-12.7232 18.19648a37.43232 37.43232 0 0 0-3.84512 11.24352 58.01984 58.01984 0 0 0-1.03424 11.24352c0 7.9872 1.62816 15.3856 5.02784 22.48704 2.81088 6.50752 7.10144 12.87168 12.7232 18.93888 4.736 4.736 10.79808 8.58112 18.34496 11.98592 7.10144 3.25632 14.7968 4.88448 23.37792 4.88448 8.43264 0 16.27648-1.62816 23.37792-4.88448 7.54688-2.81088 13.90592-6.80448 19.08736-11.98592 5.62176-6.0672 10.20928-12.42624 13.4656-18.93888 1.47968-3.25632 2.51392-6.95296 3.25632-10.79808 0.73728-3.9936 1.03424-7.84384 1.03424-11.54048 0-7.9872-1.47968-15.3856-4.29056-22.48704a77.07648 77.07648 0 0 0-13.76256-18.64192zM455.38816 737.44896c-2.0736-3.10784-4.58752-5.91872-7.3984-8.7296a55.67488 55.67488 0 0 0-19.08736-12.57472 66.10944 66.10944 0 0 0-23.37792-4.29056c-1.92512 0-3.84512 0.14848-6.0672 0.29696a77.7216 77.7216 0 0 0-6.0672 0.73728 26.22464 26.22464 0 0 0-5.62176 1.47968c-1.92512 0.73728-3.69664 1.3312-5.62176 1.77664a39.64928 39.64928 0 0 0-7.10144 3.55328l-5.62176 4.29056a42.68032 42.68032 0 0 0-6.36416 4.88448 66.37568 66.37568 0 0 0-7.3984 8.7296 59.64288 59.64288 0 0 0-5.3248 9.46688c-2.81088 7.54688-4.29056 15.08864-4.29056 22.784 0 7.69536 1.47968 15.08864 4.29056 22.04672 2.81088 6.50752 7.10144 12.87168 12.7232 18.93888a72.49408 72.49408 0 0 0 19.08736 12.57472c7.10144 2.81088 14.7968 4.29056 23.37792 4.29056 7.9872 0 15.68256-1.47968 22.93248-4.58752s13.75744-7.10144 19.3792-12.27776c5.62176-6.0672 9.91232-12.42624 12.7232-18.93888 3.25632-6.95296 4.88448-14.35136 4.88448-22.04672s-1.62816-15.3856-4.88448-22.784c-1.32096-3.40992-3.0976-6.51264-5.1712-9.62048z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconPublishgoodsFill.defaultProps = {
  size: 24,
};

export default React.memo
  ? React.memo(IconPublishgoodsFill)
  : IconPublishgoodsFill;
