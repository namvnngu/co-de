<script>
  import { resource } from '@/stores/resource';
  import TextArea from './TextArea.svelte';
</script>

<TextArea id="test-cases" title={$resource.TestCases} />
