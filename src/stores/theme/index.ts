import { getLocalStorage, setLocalStorage } from '@/utils/local-storage';
import { writable } from 'svelte/store';

const darkColorSchemeMatchMedia = window.matchMedia('(prefers-color-scheme: dark)');

export type Theme = 'DARK' | 'LIGHT';

export const theme = (function () {
  const initialLocalStorageTheme = getLocalStorage('theme');
  const initialTheme: Theme = initialLocalStorageTheme
    ? initialLocalStorageTheme
    : getSystemTheme();
  setThemeStyle(initialTheme);

  const { subscribe, set } = writable(initialTheme);

  function setThemeOnMediaMatch(event: MediaQueryListEvent) {
    const theme = event.matches ? 'DARK' : 'LIGHT';
    set(theme);
    setThemeStyle(theme);
  }

  if (!initialLocalStorageTheme) {
    darkColorSchemeMatchMedia.addEventListener('change', setThemeOnMediaMatch);
  }

  return {
    subscribe,
    set: function (theme: Theme): void {
      set(theme);
      setThemeStyle(theme);
      setLocalStorage('theme', theme);
      if (!initialLocalStorageTheme) {
        darkColorSchemeMatchMedia.removeEventListener(
          'change',
          setThemeOnMediaMatch,
        );
      }
    },
  };
})();

function setThemeStyle(theme: Theme): void {
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

function getSystemTheme(): Theme {
  return darkColorSchemeMatchMedia.matches ? 'DARK' : 'LIGHT';
}
