<script lang="ts">
  import Moon from '@/icons/Moon.svelte';
  import Sun from '@/icons/Sun.svelte';
  import { theme } from '@/stores/theme';
</script>

<button
  class="theme-toggle"
  on:click={() => theme.set($theme === 'DARK' ? 'LIGHT' : 'DARK')}
>
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
