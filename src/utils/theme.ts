import { getLocalStorage, setLocalStorage } from './localStorage';

export type Theme = 'DARK' | 'LIGHT';

export function getLocalStorageTheme(): Theme | null {
  return getLocalStorage('theme');
}

export function setLocalStorageTheme(theme: Theme): boolean {
  return setLocalStorage('theme', theme);
}

export function setThemeStyle(theme: Theme) {
  if (document.documentElement.classList.value) {
    document.documentElement.classList.remove('light-mode');
    document.documentElement.classList.remove('dark-mode');
  }

  if (theme === 'LIGHT') {
    document.documentElement.classList.add('light-mode');
  } else if (theme === 'DARK') {
    document.documentElement.classList.add('dark-mode');
  }
}

export const prefersColorSchemeMatchMedia = window.matchMedia(
  '(prefers-color-scheme: dark)',
);

export function getSystemTheme(): Theme {
  return prefersColorSchemeMatchMedia.matches ? 'DARK' : 'LIGHT';
}
