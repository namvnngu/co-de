<script lang="ts">
  import { onMount } from 'svelte';

  import Moon from '@/icons/Moon.svelte';
  import Sun from '@/icons/Sun.svelte';

  import {
    type Theme,
    setThemeStyle,
    getSystemTheme,
    getLocalStorageTheme,
    setLocalStorageTheme,
    MATCH_MEDIA_PREFERS_COLOR_SCHEME,
  } from '@/utils/theme';

  // VALUES
  let theme: Theme = (() => {
    const localeStorageTheme = getLocalStorageTheme();
    return localeStorageTheme ? localeStorageTheme : getSystemTheme();
  })();

  // HANDLERS
  function toggleTheme() {
    const newTheme: Theme = theme === 'LIGHT' ? 'DARK' : 'LIGHT';

    theme = newTheme;
    setLocalStorageTheme(newTheme);
    setThemeStyle(newTheme);
  }

  // LIFECYCLE
  onMount(() => {
    const localeStorageTheme = getLocalStorageTheme();

    if (localeStorageTheme) {
      setThemeStyle(localeStorageTheme);
    } else {
      const setThemeOnMediaMatch = (
        event: MediaQueryListEvent | MediaQueryList,
      ) => {
        if (getLocalStorageTheme()) return;

        const newTheme = event.matches ? 'DARK' : 'LIGHT';
        theme = newTheme;
        setThemeStyle(newTheme);
      };

      setThemeOnMediaMatch(window.matchMedia(MATCH_MEDIA_PREFERS_COLOR_SCHEME));

      window
        .matchMedia(MATCH_MEDIA_PREFERS_COLOR_SCHEME)
        .addEventListener('change', setThemeOnMediaMatch);
      return () => {
        window
          .matchMedia(MATCH_MEDIA_PREFERS_COLOR_SCHEME)
          .removeEventListener('change', setThemeOnMediaMatch);
      };
    }
  });
</script>

<button class="theme-toggle" on:click={toggleTheme}>
  <span class="option dark-option"><Moon /></span>
  <span class="option light-option"><Sun /></span>
</button>

<style>
  .theme-toggle {
    display: flex;
    border: 0.2rem solid var(--color-text);
    transition: var(--color-transition);
  }

  .option {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 3.8rem;
    min-height: 3rem;
    transition: var(--color-transition);
  }

  .light-option {
    background-color: var(--color-background);
  }

  .dark-option {
    background-color: var(--color-text);
  }
</style>
