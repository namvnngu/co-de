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

      & > :global(.constraints) {
        grid-column: 1 / 2;
        grid-row: 1 / 3;
      }

      & > :global(.ideas) {
        grid-column: 1 / 2;
        grid-row: 3 / 6;
      }
      & > :global(.test-cases) {
        grid-column: 1 / 2;
        grid-row: 6 / 8;
      }
      & > :global(.code) {
        grid-column: 2 / 3;
        grid-row: 1 / 8;
      }
    }
  }
</style>
