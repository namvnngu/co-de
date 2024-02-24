<script lang="ts">
  import { resource } from '@/stores/resource';
  import Logo from './Logo.svelte';
  import ThemeToggle from './ThemeToggle.svelte';
  import { getLocalStorage, setLocalStorage } from '@/utils/local-storage';

  let projectName = getLocalStorage('projectName') ?? '';

  function handleProjectNameChange(event: Event) {
    const newProjectName = (event.target as HTMLInputElement).value;
    projectName = newProjectName;
    setLocalStorage('projectName', newProjectName);
  }
</script>

<header class="header">
  <Logo />
  <input
    type="text"
    title={projectName}
    value={projectName}
    class="project-name"
    on:input={handleProjectNameChange}
    placeholder={$resource.ProjectNamePlaceholder}
  />
  <ThemeToggle />
</header>

<style lang="scss">
  .header {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 4fr 1fr;
    gap: 0.8rem 1.6rem;

    & > :global(*:first-child) {
      justify-self: start;
      grid-row: 1 / 2;
      grid-column: 1 / 2;
    }
    & > :global(*:last-child) {
      justify-self: end;
      grid-row: 1 / 2;
      grid-column: 3 / 4;
    }
  }

  .project-name {
    all: unset;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: var(--font-size-20);
    font-weight: var(--font-weight-bold);
    text-align: center;
    transition: var(--color-transition);
    color: var(--color-text);

    grid-row: 1 / 2;
    grid-column: 2 / 3;

    &::placeholder {
      color: var(--color-text-subtle);
    }

    &:focus::placeholder {
      color: transparent;
    }
  }

  @media (max-width: 425px) {
    .header {
      grid-template-rows: 1fr auto;
    }
    .project-name {
      grid-row: 2 / 3;
      grid-column: 1 / 4;
    }
  }
</style>
