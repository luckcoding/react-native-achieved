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

const IconTasklist: FunctionComponent<Props> = ({size, color, ...rest}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M832.452066 257.064784H704.333401v-85.520142c0-32.988074-28.884086-42.676865-63.951548-42.676865H383.694441c-35.098696 0-63.951548 9.545932-63.951548 42.676865v85.520142h-128.118665c-35.668083 0-64.176845 28.619874-64.176845 64.096455v480.740056c0 35.235923 28.79448 64.098503 64.176845 64.098503h640.827838c35.668083 0 64.176845-28.621923 64.176845-64.098503V321.161239c-0.000512-35.235411-28.79448-64.096455-64.176845-64.096455zM383.841396 192.96628h256.393502v64.098504H383.841396v-64.098504z m-192.217168 128.197007s640.905668 0.129034 640.905668-0.002048c0 0 0.015873 56.003688 0.027138 129.745923-2.521277-0.637488-4.945267-1.54738-7.664191-1.54738H191.545886c-0.013825 0-0.023554 0.007681-0.037379 0.007681 0.012289-72.96496 0.043523-128.204175 0.115721-128.204176zM567.245871 513.458285c-11.103041 19.078039-31.54259 32.048996-55.20798 32.048996-23.665391 0-44.10494-12.970957-55.207981-32.048996h110.415961z m265.206195 288.44301s-640.905668-0.131082-640.905668 0c0 0-0.043011-154.589002-0.040963-288.45069 0.013825 0 0.02765 0.007681 0.040963 0.00768h196.827562C402.671096 568.654489 452.372616 609.605784 512.038403 609.605784S621.405197 568.654489 635.702846 513.458285h189.191021c2.720972 0 5.150594-0.90938 7.67392-1.549428 0.015361 134.216018 0.003584 289.992437-0.115721 289.992438z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconTasklist.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconTasklist) : IconTasklist;