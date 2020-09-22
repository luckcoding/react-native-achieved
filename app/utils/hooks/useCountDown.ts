import {useState, useEffect, useRef} from 'react';

interface UseCountDownOptions {
  duration?: number;
  autoPlay?: boolean;
  onBeforeChange?: (nextCount: number) => number;
}

export function useCountDown(options: UseCountDownOptions = {}) {
  const intervalRef = useRef<number>();
  const [count, setCount] = useState<number>(0);

  const defaultDuration = options.duration || 0;
  const onBeforeChange = options.onBeforeChange || ((count) => count);

  const start = (duration?: number) => {
    clearInterval(intervalRef.current);
    setCount(duration || defaultDuration);
    intervalRef.current = setInterval(() => {
      setCount((prevCount) => {
        const nextCount = onBeforeChange(prevCount - 1);
        nextCount === 0 && clearInterval(intervalRef.current);
        return nextCount;
      });
    }, 1000);
  };

  useEffect(() => {
    if (options && options.autoPlay) {
      start();
    }
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return {count, start};
}
