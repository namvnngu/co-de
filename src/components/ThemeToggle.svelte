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
    darkColorSchemeMatchMedia,
  } from '@/utils/theme';

  // VALUES
  const initialLocalStorageTheme = getLocalStorageTheme();
  let currentTheme: Theme = initialLocalStorageTheme
    ? initialLocalStorageTheme
    : getSystemTheme();
  let mode: 'USER' | 'SYSTEM' = initialLocalStorageTheme ? 'USER' : 'SYSTEM';

  // HANDLERS
  function toggleTheme() {
    if (mode !== 'USER') {
      mode = 'USER';
    }

    const newTheme: Theme = currentTheme === 'LIGHT' ? 'DARK' : 'LIGHT';
    currentTheme = newTheme;
    setLocalStorageTheme(newTheme);
    setThemeStyle(newTheme);
  }

  function setThemeOnMediaMatch(event: MediaQueryListEvent | MediaQueryList) {
    const newTheme = event.matches ? 'DARK' : 'LIGHT';
    currentTheme = newTheme;
    setThemeStyle(newTheme);
  }

  // LIFECYCLE
  onMount(() => {
    setThemeStyle(currentTheme);

    if (initialLocalStorageTheme) return;

    darkColorSchemeMatchMedia.addEventListener('change', setThemeOnMediaMatch);
    return () => {
      darkColorSchemeMatchMedia.removeEventListener('change', setThemeOnMediaMatch);
    };
  });

  // REACTIVE STATEMENTS
  $: if (mode === 'USER' && !initialLocalStorageTheme) {
    console.log('Runnn');
    darkColorSchemeMatchMedia.removeEventListener('change', setThemeOnMediaMatch);
  }
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
