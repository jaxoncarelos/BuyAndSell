<script>
  import ListPosts from "$lib/components/ListPosts.svelte";
	import { userStore } from '$lib/stores/stores';

  export let data;

  $:{
      const newUser = data?.authedUser;
      userStore.set(newUser);
  }
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