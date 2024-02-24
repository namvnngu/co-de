<script lang="ts">
  import { resource } from '@/stores/resource';
  import TextArea from './TextArea.svelte';
  import { getLocalStorage, setLocalStorage } from '@/utils/local-storage';

  let ideas = getLocalStorage('ideas') ?? '';

  function handleIdeasChange(event: Event) {
    const newIdeas = (event.target as HTMLTextAreaElement).value;
    ideas = newIdeas;
    setLocalStorage('ideas', newIdeas);
  }
</script>

<TextArea
  id="ideas"
  value={ideas}
  title={$resource.Ideas}
  on:input={handleIdeasChange}
/>
