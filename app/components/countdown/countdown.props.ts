import {ViewProps} from 'react-native';

export interface CountdownProps extends ViewProps {
  duration: number;
  name?: string; // for cache name
  text: string;
  nextText: string;
  onOk?: (run?: () => void) => void;
  autoPlay?: boolean;
  disabled?: boolean;
}
