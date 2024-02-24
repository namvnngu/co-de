<script>
  import { resource } from '@/stores/resource';
  import TextArea from './TextArea.svelte';
</script>

<TextArea
  id="code"
  title={`${$resource.Pseudocode} / ${$resource.Code}`}
  contentType="code"
/>
