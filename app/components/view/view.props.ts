import { ViewProps as RNViewProps } from 'react-native';
import { ColorsModifiers } from '../../theme';

export type ViewProps = RNViewProps &
  ColorsModifiers & {
    // row?: boolean
    // center?: boolean
    // centerV?: boolean
    // centerH?: boolean
    // flex?: boolean
  };
