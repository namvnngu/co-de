<script lang="ts">
  import { resource } from '@/stores/resource';

  export let id: string;
  export let title: string;
  export let value = '';
  export let contentType: 'normal' | 'code' = 'normal';
</script>

<section class="text-area">
  <label for={id} class="text-area__title">{title}</label>
  <textarea
    {id}
    {value}
    name={id}
    placeholder={$resource.YouCanStartHere}
    class={`text-area__content ${contentType === 'code' ? 'text-area__content-code' : ''}`}
    on:input
  ></textarea>
</section>

<style lang="scss">
  .text-area {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    background-color: var(--color-background);
    padding: 0.8rem;
  }

  .text-area__title {
    font-size: var(--font-size-18);
    font-weight: var(--font-weight-bold);
    color: var(--color-text);
  }

  .text-area__content {
    padding: 0;
    color: var(--color-text);
    background-color: var(--color-background);
    font-size: var(--font-size-16);
    border: none;
    overflow: auto;
    outline: none;
    box-shadow: none;
    resize: none;
    flex: 1;
    min-height: calc(1em * var(--font-line-height) * 6);
  }
  .text-area__content-code {
    font-family: var(--font-code);
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
