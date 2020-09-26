import {
  NativeScrollEvent,
  ScrollViewProps as RNScrollViewProps,
} from 'react-native';
import Animated from 'react-native-reanimated';

export interface ScrollViewProps
  extends Omit<
    RNScrollViewProps,
    | 'onScroll'
    | 'onScrollBeginDrag'
    | 'onScrollEndDrag'
    | 'onMomentumScrollBegin'
    | 'onMomentumScrollEnd'
    | 'refreshControl'
  > {
  onScroll?: (event: NativeScrollEvent) => void;
  onBeginDrag?: (event: NativeScrollEvent) => void;
  onEndDrag?: (event: NativeScrollEvent) => void;
  onMomentumBegin?: (event: NativeScrollEvent) => void;
  onMomentumEnd?: (event: NativeScrollEvent) => void;
  children?: React.ReactNode;
  isRefreshing?: boolean;
  onRefresh?: () => void;
  RefreshComponent?: () => React.ReactNode;
  refreshSize?: number;
  refreshDuration?: number;
  refreshTimingConfig?: Animated.WithTimingConfig;
}
