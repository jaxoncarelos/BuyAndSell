<script lang="ts">
  import Post from "$lib/components/Post.svelte";

  export let Posts: Post[];
</script>
<div class="wrapper">
  {#each Posts as post }
    <Post {post} />
  {/each}
</div>