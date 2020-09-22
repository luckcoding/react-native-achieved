import {useState, Dispatch, SetStateAction, useEffect, useRef} from 'react';

export function useSafeState<S>(
  initialState?: S | (() => S),
): [S, Dispatch<SetStateAction<S>>] {
  const [state, setState] = useState(initialState);

  const safeRef = useRef<boolean>(true);

  const safed = (state: S | (() => S)) => {
    if (!safeRef.current) return; // stop set
    return setState(state);
  };

  useEffect(
    () => () => {
      safeRef.current = false;
    },
    [],
  );

  return [state, safed];
}
