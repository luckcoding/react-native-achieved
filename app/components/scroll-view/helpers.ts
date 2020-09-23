import { MutableRefObject, useCallback, useMemo, useRef } from 'react';

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
