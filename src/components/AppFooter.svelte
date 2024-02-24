<script lang="ts">
  import { resource } from '@/stores/resource';
</script>

<footer class="footer">
  <p>{$resource.ProjectDescription}</p>
  <p>
    {$resource.ProjectSubDescription[0]}
    <a href={$resource.NamNguyenGithub} rel="noopener noreferrer" target="_blank"
      >{$resource.NamNguyen}</a
    >{$resource.ProjectSubDescription[1]}
    <a href={$resource.HiredInTechLink} rel="noopener noreferrer" target="_blank"
      >{$resource.HiredInTechDomain}</a
    >.
  </p>
  <a href={$resource.ProjectSourceCodeLink} rel="noopener noreferrer" target="_blank"
    >{$resource.SourceCode}</a
  >
</footer>

<style lang="scss">
  .footer {
    color: var(--color-text);
    font-size: var(--font-size-12);
    text-align: center;

    & a {
      color: var(--color-text);
      text-underline-offset: 0.2rem;
    }
  }
</style>
