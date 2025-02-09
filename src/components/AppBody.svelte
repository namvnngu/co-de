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
      grid-template-rows: repeat(9, 10rem);

      & > :global(*:nth-child(1)) {
        grid-column: 1 / 2;
        grid-row: 1 / 4;
      }
      & > :global(*:nth-child(2)) {
        grid-column: 1 / 2;
        grid-row: 4 / 7;
      }
      & > :global(*:nth-child(3)) {
        grid-column: 1 / 2;
        grid-row: 7 / 10;
      }
      & > :global(*:nth-child(4)) {
        grid-column: 2 / 3;
        grid-row: 1 / 10;
      }
    }
  }
</style>
