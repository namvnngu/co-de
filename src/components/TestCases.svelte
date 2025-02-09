<script lang="ts">
  import { resource } from '@/stores/resource';
  import TextArea from './TextArea.svelte';
  import { getLocalStorage, setLocalStorage } from '@/utils/local-storage';

  let testCases = getLocalStorage('testCases') ?? '';

  function handleTestCasesChange(event: Event) {
    const newTestCases = (event.target as HTMLTextAreaElement).value;
    testCases = newTestCases;
    setLocalStorage('testCases', newTestCases);
  }
</script>

<TextArea
  id="test-cases"
  value={testCases}
  title={$resource.TestCases}
  on:input={handleTestCasesChange}
/>
