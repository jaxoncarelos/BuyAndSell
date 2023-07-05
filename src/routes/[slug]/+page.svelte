<script>
	import ListPosts from '$lib/components/ListPosts.svelte';
  export let data;
  let Posts = data?.posts;
</script>

<div class="wrapper">
  <ListPosts {Posts} />
</div>