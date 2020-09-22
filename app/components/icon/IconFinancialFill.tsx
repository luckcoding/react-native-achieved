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

const IconFinancialFill: FunctionComponent<Props> = ({
  size,
  color,
  ...rest
}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M483.20512 158.0032c-5.23776-4.03456-13.09696-6.6816-23.58272-7.94624-10.48064-1.25952-19.97824 0.128-28.50304 4.16256-11.136 5.54496-18.9952 10.2144-23.58272 13.99808-4.58752 3.78368-11.46368 6.43072-20.63872 7.94112-5.24288 1.00864-10.97728 0.76288-17.19808-0.75776a1831.72096 1831.72096 0 0 0-19.16416-4.54144 134.68672 134.68672 0 0 0-18.67264-3.02592c-5.89824-0.50176-11.14112 0.50688-15.72864 3.02592-9.16992 5.55008-12.11904 12.2368-8.84736 20.05504 3.28192 7.81824 9.17504 13.99296 17.69472 18.5344a310.29248 310.29248 0 0 1 24.07936 15.5136 123.93984 123.93984 0 0 1 22.11328 20.05504c3.2768 4.03456 7.20384 8.576 11.79136 13.6192a260.7104 260.7104 0 0 1 12.7744 15.1296 515.52256 515.52256 0 0 1 13.75744 17.408h203.44832a166.5024 166.5024 0 0 0 12.7744-15.89248 196.50048 196.50048 0 0 1 10.81344-13.62432 468.47488 468.47488 0 0 1 10.80832-12.10368 498.93376 498.93376 0 0 1 19.65568-20.05504c6.5536-6.30272 16.05632-12.48768 28.50304-18.5344a41.74848 41.74848 0 0 0 13.27104-9.84064c3.60448-4.03456 5.89824-8.07424 6.88128-12.10368 0.97792-4.03968 0.32256-7.94624-1.9712-11.72992s-6.71232-6.68672-13.26592-8.704c-5.89824-1.51552-10.97728-2.01728-15.22688-1.51552-4.26496 0.50688-8.51456 1.38752-12.77952 2.64704-4.25984 1.26464-8.68352 2.64704-13.2608 4.16256-4.59264 1.51552-10.1632 2.26816-16.71168 2.26816-6.5536 0-11.9552-0.88064-16.21504-2.64704a61.58336 61.58336 0 0 1-11.79136-6.43584c-3.6096-2.51904-7.3728-5.1712-11.30496-7.94624s-9.17504-4.9152-15.72864-6.43072c-13.09696-4.03456-23.58784-4.7872-31.44704-2.26816-7.86944 2.51904-15.72864 6.55872-23.58784 12.10368-6.5536 5.0432-11.79136 8.58112-15.72352 10.5984-1.9712 1.00352-3.60448 1.5104-4.9152 1.5104a65.30048 65.30048 0 0 1-10.81344-5.29408M344.41728 394.43968a1166.30016 1166.30016 0 0 1-43.88352 35.93728 358.26688 358.26688 0 0 0-51.8144 48.7424 270.4896 270.4896 0 0 0-39.68 59.89888c-10.58304 21.75488-17.8944 45.0304-21.9392 69.8112-4.03968 24.78592-3.26656 50.67264 2.33984 77.66016 4.98176 24.23808 15.24736 48.60416 30.81216 73.11872 15.55456 24.50944 36.56192 46.67904 63.01696 66.49856 26.44992 19.82464 58.65984 35.93728 96.62464 48.32768 37.96992 12.3904 81.54112 18.59584 130.70848 18.59584 47.92832 0 90.72128-5.37088 128.37376-16.11776 37.65248-10.74176 70.17984-25.19552 97.5616-43.37152 27.38688-18.17088 53.37088-38.55872 69.8624-63.06304 16.49664-24.50432 28.95872-54.01088 34.56-81.55648 6.2208-33.60256 4.66944-60.36992 0-87.63904-4.67456-27.25888-16.04096-52.48-27.86304-73.41056-11.83232-20.93056-25.6768-39.2448-41.5488-54.94784-15.87712-15.6928-31.27808-29.32224-46.21824-40.88832-18.048-13.21984-30.68416-20.97152-44.36992-32.8192-13.69088-11.84256-23.94624-16.18944-33.28-25.56416-11.20256-10.46528-25.80992-17.96096-33.28-26.7776H404.34176m216.93952 339.9936c13.71648 0 24.84224 10.64448 24.84224 23.7824 0 13.1328-11.12064 23.7824-24.84224 23.7824h-81.62304v20.3776c0 13.1328-11.12576 23.7824-24.84224 23.7824-13.71648 0-24.84224-10.64448-24.84224-23.7824v-20.3776H408.35072c-13.71648 0-24.84224-10.64448-24.84224-23.7824 0-13.1328 11.12064-23.7824 24.84224-23.7824h81.62304v-54.35904H408.35072c-13.71648 0-24.84224-10.64448-24.84224-23.7824 0-13.1328 11.12064-23.7824 24.84224-23.7824H479.6928l-0.18944-0.17408-70.97856-67.9424c-9.7024-9.28768-9.7024-24.3456 0-33.63328s25.43104-9.28768 35.13344 0l70.97856 67.95264 0.1792 0.16896 0.1792-0.16896 70.97856-67.94752c9.69728-9.28768 25.42592-9.28768 35.12832 0a23.07072 23.07072 0 0 1 0 33.63328l-70.97856 67.9424-0.18944 0.17408h71.34208c13.71648 0 24.84224 10.64448 24.84224 23.7824s-11.12064 23.7824-24.84224 23.7824h-81.62304v54.35392h81.62816z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconFinancialFill.defaultProps = {
  size: 24,
};

export default React.memo ? React.memo(IconFinancialFill) : IconFinancialFill;