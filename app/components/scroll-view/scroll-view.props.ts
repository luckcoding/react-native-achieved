import {
  NativeScrollEvent,
  ScrollViewProps as RNScrollViewProps,
} from 'react-native';

export interface ScrollViewProps
  extends Omit<
    RNScrollViewProps,
    | 'onScroll'
    | 'onScrollBeginDrag'
    | 'onScrollEndDrag'
    | 'onMomentumScrollBegin'
    | 'onMomentumScrollEnd'
  > {
  onScroll?: (event: NativeScrollEvent) => void;
  onBeginDrag?: (event: NativeScrollEvent) => void;
  onEndDrag?: (event: NativeScrollEvent) => void;
  onMomentumBegin?: (event: NativeScrollEvent) => void;
  onMomentumEnd?: (event: NativeScrollEvent) => void;
  children?: React.ReactNode;
}
