<script>
  import ListPosts from "$lib/components/ListPosts.svelte";
  export let data;
  let Posts = data.posts
</script>
<div class="test">
  <ListPosts {Posts} />
</div>

<style>
  .test {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    /* small space in between each post */
}
</style>