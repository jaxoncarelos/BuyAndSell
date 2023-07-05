<script>
  import Post from '$lib/components/Post.svelte';
  export let data;
  let posts = data?.posts;
</script>

<div class="wrapper">
  {#each posts as post }
    <Post {post} />
  {/each}
</div>