<script>
  import { resource } from '@/stores/resource';
  import TextArea from './TextArea.svelte';
</script>

<TextArea id="ideas" title={$resource.Ideas} />
