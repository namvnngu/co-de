<script lang="ts">
  import Moon from '@/icons/Moon.svelte';
  import Sun from '@/icons/Sun.svelte';
  import { theme } from '@/stores/theme';
</script>

<button
  class="theme-toggle"
  on:click={() => theme.set($theme === 'DARK' ? 'LIGHT' : 'DARK')}
>
  <span class="theme-toggle__option theme-toggle__dark-option"><Moon /></span>
  <span class="theme-toggle__option theme-toggle__light-option"><Sun /></span>
</button>

<style lang="scss">
  .theme-toggle {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 7.6rem;
    height: 3rem;
    border: 0.2rem solid var(--color-text);
    transition: var(--color-transition);
  }

  .theme-toggle__option {
    display: grid;
    place-items: center;
    transition: var(--color-transition);
  }

  .theme-toggle__light-option {
    background-color: var(--color-background);
  }

  .theme-toggle__dark-option {
    background-color: var(--color-text);
  }
</style>
