import { useState, useEffect } from 'react';

interface UseLocalStorageProps<T> {
  key: string;
  initialValue: T;
}

function useLocalStorage<T>({ key, initialValue }: UseLocalStorageProps<T>): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;