<script>
  import Code from './Code.svelte';
  import Ideas from './Ideas.svelte';
  import TestCases from './TestCases.svelte';
  import Constraints from './Constraints.svelte';
</script>

<main class="body">
  <Constraints />
  <Ideas />
  <TestCases />
  <Code />
</main>

<style lang="scss">
  .body {
    display: grid;
    gap: 0.4rem;
    border: 0.4rem solid var(--color-text);
    background-color: var(--color-text);
  }

  @media (min-width: 768px) {
    .body {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(7, 10rem);

      & > :global(*:nth-child(1)) {
        grid-column: 1 / 2;
        grid-row: 1 / 3;
      }
      & > :global(*:nth-child(2)) {
        grid-column: 1 / 2;
        grid-row: 3 / 6;
      }
      & > :global(*:nth-child(3)) {
        grid-column: 1 / 2;
        grid-row: 6 / 8;
      }
      & > :global(*:nth-child(4)) {
        grid-column: 2 / 3;
        grid-row: 1 / 8;
      }
    }
  }
</style>
