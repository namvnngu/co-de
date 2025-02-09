<script lang="ts">
  import { resource } from '@/stores/resource';
  import TextArea from './TextArea.svelte';
  import { getLocalStorage, setLocalStorage } from '@/utils/local-storage';

  let code = getLocalStorage('code') ?? '';

  function handleCodeChange(event: Event) {
    const newCode = (event.target as HTMLTextAreaElement).value;
    code = newCode;
    setLocalStorage('code', newCode);
  }
</script>

<TextArea
  id="code"
  value={code}
  contentType="code"
  title={`${$resource.Pseudocode} / ${$resource.Code}`}
  on:input={handleCodeChange}
/>
