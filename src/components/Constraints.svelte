<script lang="ts">
  import { resource } from '@/stores/resource';
  import TextArea from './TextArea.svelte';
  import { getLocalStorage, setLocalStorage } from '@/utils/local-storage';

  let constraints = getLocalStorage('constraints') ?? '';

  function handleConstraintsChange(event: Event) {
    const newConstraints = (event.target as HTMLTextAreaElement).value;
    constraints = newConstraints;
    setLocalStorage('constraints', newConstraints);
  }
</script>

<TextArea
  id="constraints"
  value={constraints}
  title={$resource.Constraints}
  on:input={handleConstraintsChange}
/>
