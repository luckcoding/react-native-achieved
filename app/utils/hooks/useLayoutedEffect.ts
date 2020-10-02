import { DependencyList, useCallback, useEffect, useMemo, useRef } from 'react';
import { LayoutChangeEvent } from 'react-native';

type LayoutedEffectCallback = (event: LayoutChangeEvent) => void | undefined;

// effect only run affter view mounted，
export function useLayoutedEffect(
  effect: LayoutedEffectCallback,
  deps: DependencyList,
) {
  const taskEffectRef = useRef<LayoutedEffectCallback>();
  const state = useMemo(() => ({ mounted: false, event: null }), []);

  const onLayout = useCallback((event: LayoutChangeEvent) => {
    state.mounted = true;
    if (taskEffectRef.current) {
      taskEffectRef.current(event);
      taskEffectRef.current = undefined;
      state.event = event;
    }
  }, []);

  useEffect(() => {
    state.mounted && effect(state.event);
  }, deps);

  return onLayout;
}
