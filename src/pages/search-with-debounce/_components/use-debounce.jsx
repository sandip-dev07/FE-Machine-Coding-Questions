import { useCallback, useRef } from "react";

export function useDebounce(fn, delay = 600) {
  const timer = useRef(null);

  return useCallback(
    (...args) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        fn(...args);
        timer.current = null;
      }, delay);
    },
    [fn, delay]
  );
}
