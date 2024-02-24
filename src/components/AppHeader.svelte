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
    gap: 1.6rem;

    & > :global(*:first-child) {
      justify-self: start;
    }
    & > :global(*:last-child) {
      justify-self: end;
    }
  }

  .project-name {
    all: unset;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: var(--font-size-14);
    text-align: center;
    transition: var(--color-transition);
    color: var(--color-text);

    &::placeholder {
      color: var(--color-text-subtle);
    }

    &:focus::placeholder {
      color: transparent;
    }
  }

  @media (min-width: 768px) {
    .project-name {
      font-size: var(--font-size-16);
    }
  }
</style>
