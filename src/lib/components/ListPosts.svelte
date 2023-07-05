<script lang="ts">
  import IndividualPost from "$lib/components/IndividualPost.svelte";

  export let Posts: Post[];
</script>
<div class="wrapper">
  {#each Posts as post (post.id) }
    <IndividualPost {post} />
  {/each}
</div>

<style>
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-direction: column;
  }
</style>