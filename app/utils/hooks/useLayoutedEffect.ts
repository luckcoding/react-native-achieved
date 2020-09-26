import {
  DependencyList,
  EffectCallback,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react';

export function useLayoutedEffect(
  effect: EffectCallback,
  deps?: DependencyList,
) {
  const taskEffectRef = useRef<EffectCallback>();
  const state = useMemo(() => ({ mounted: false }), []);
  const onLayout = useCallback(() => {
    state.mounted = true;
    if (taskEffectRef.current) {
      taskEffectRef.current();
      taskEffectRef.current = undefined;
    }
  }, deps);

  useEffect(() => {
    state.mounted ? effect() : (taskEffectRef.current = effect);
  }, deps);
  return onLayout;
}
