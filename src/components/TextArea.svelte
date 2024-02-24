<script lang="ts">
  import { resource } from '@/stores/resource';

  export let id: string;
  export let title: string;
</script>

<section class="text-area box">
  <label for={id} class="text-area__title">{title}</label>
  <textarea
    {id}
    name={id}
    class="text-area__content"
    placeholder={$resource.YouCanStartHere}
  ></textarea>
</section>

<style lang="scss">
  .text-area {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    background-color: var(--color-background);
  }

  .text-area__title {
    font-size: var(--font-size-14);
    color: var(--color-text);
  }

  .text-area__content {
    padding: 0;
    color: var(--color-text);
    background-color: var(--color-background);
    font-size: var(--font-size-12);
    border: none;
    overflow: auto;
    outline: none;
    box-shadow: none;
    resize: none;
    flex: 1;
    min-height: calc(1em * var(--font-line-height) * 6);
  }

  .text-area__content::-webkit-scrollbar {
    width: 0.4rem;
  }

  .text-area__content::-webkit-scrollbar-thumb {
    background-color: var(--color-text-subtle);
    border-radius: 1rem;
  }

  .text-area__content::placeholder {
    color: var(--color-text-subtle);
  }
</style>
