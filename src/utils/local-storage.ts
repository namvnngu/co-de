import type { Theme } from '@/stores/theme';

type LocalStorage = {
  theme: Theme;
  projectName: string;
};

export function getLocalStorage<T extends keyof LocalStorage>(
  key: T,
): LocalStorage[T] | null {
  return localStorage.getItem(key) as LocalStorage[T] | null;
}

export function setLocalStorage<T extends keyof LocalStorage>(
  key: T,
  value: LocalStorage[T],
): boolean {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch (error) {
    return false;
  }
}