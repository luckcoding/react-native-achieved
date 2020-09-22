import {useRef} from 'react';

interface UseCombineOptions {
  duration?: number;
  params?: boolean;
}

interface IFunction {
  (...args: any[]): void;
}

export const useCombine = <F extends IFunction>(
  func: F,
  options: UseCombineOptions = {},
): {
  executor: F;
  state: {paramsStack: Parameters<F>[]};
} => {
  const {duration, params} = options;
  const timerRef = useRef<number>();
  const stateRef = useRef<{paramsStack: Parameters<F>[]}>({paramsStack: []});

  return {
    executor: <any>function main(...args: Parameters<F>): any {
      params && stateRef.current.paramsStack.push(args);
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        func(...args);
        clearTimeout(timerRef.current);
        params && (stateRef.current.paramsStack = []);
      }, duration);
    },
    state: stateRef.current,
  };
};
