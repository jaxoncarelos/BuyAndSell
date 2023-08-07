<script lang="ts">
	import ListPosts from '$lib/components/ListPosts.svelte';
  export let data: {posts: Post[]};
</script>
{#if data.posts }
<div class="wrapper">
  <ListPosts Posts={data.posts} />
</div>
{:else}
  <div class="errow">User doesn't exist, or the user has no posts.</div>
{/if}