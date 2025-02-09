<script>
  import { resource } from '@/stores/resource';
</script>

<span class="app-logo">{$resource.AppName}</span>

<style lang="scss">
  .app-logo {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    font-size: var(--font-size-14);

    border-radius: 50%;

    font-size: var(--font-size-12);

    width: 4rem;
    height: 4rem;

    color: var(--color-background);
    background-color: var(--color-text);
    transition: var(--color-transition);
  }

  @media (min-width: 768px) {
    .app-logo {
      font-size: var(--font-size-14);

      width: 5rem;
      height: 5rem;
    }
  }
</style>
