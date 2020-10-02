import { MutableRefObject, useCallback, useMemo, useRef } from 'react';
import Animated, { withTiming } from 'react-native-reanimated';

export function useGestureHandler<T>(): [
  MutableRefObject<T>,
  (enabled: boolean) => void,
] {
  const ref = useRef<T>();
  const state = useMemo(() => ({ enabled: true }), []);
  const setEnabled = useCallback((enabled) => {
    if (state.enabled !== enabled) {
      state.enabled = enabled;
      // @ts-ignore
      ref.current && ref.current.setNativeProps(state);
    }
  }, []);
  return [ref, setEnabled];
}

export function withAsyncTiming(
  sharedValue: Animated.SharedValue<number>,
  toValue: number,
  userConfig?: Animated.WithTimingConfig,
) {
  return new Promise((resolve) => {
    sharedValue.value = withTiming(
      toValue,
      userConfig,
      (isCancelled: boolean) => resolve(isCancelled),
    );
  });
}
