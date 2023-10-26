import { useState, useEffect, useCallback } from "react";

const listeners: Record<string, Function[]> = {};

function useLocalStorage<T>(key: string): [T | undefined, (value: T) => void] {
  const [value, setValue] = useState<T | undefined>(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : undefined;
  });

  const setLocalStorageValue = useCallback(
    (newValue: T) => {
      window.localStorage.setItem(key, JSON.stringify(newValue));
      Object.values(listeners[key] || []).forEach((listener) =>
        listener(newValue)
      );
    },
    [key]
  );

  useEffect(() => {
    if (!listeners[key]) {
      listeners[key] = [];
    }

    listeners[key].push(setValue);

    return () => {
      const index = listeners[key].indexOf(setValue);
      if (index >= 0) {
        listeners[key].splice(index, 1);
      }
    };
  }, [key]);

  return [value, setLocalStorageValue];
}

export default useLocalStorage;
