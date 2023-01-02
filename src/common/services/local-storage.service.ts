import { LocalStorageKeys } from './types';

export const localStorageService = {
  getLocalStorageItem: <R>(itemKey: LocalStorageKeys): R | null => {
    const storaged = localStorage.getItem(itemKey);
    return storaged ? JSON.parse(storaged) : null;
  },
  setLocalStorageItem: <T>(key: LocalStorageKeys, items: T) => {
    return localStorage.setItem(key, JSON.stringify(items));
  },
};
