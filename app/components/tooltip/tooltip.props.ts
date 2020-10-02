import { ViewProps } from 'react-native';
import { IPosition, IPlace } from './constants';

export interface TooltipProps extends ViewProps {
  position?: IPosition;
  place?: IPlace;
  showType?: 'longPress' | 'press' | 'always';
  triangleWidth?: number;
  triangleHeight?: number;
  triangleColor?: string;
  popover: React.ReactNode;
  children: React.ReactNode;
}
