<script lang="ts">
	import { toasts } from 'svelte-toasts';
  export let post: Post;

  async function handleLike() {
    const response = await fetch("/api/posts/like", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: post.id }),
    });
    console.log(response)
    if (response.status === 200 && (await response.json()).success) {
      post.likes++;
    } else {
      toasts.add({ title: "Error", type: "error", description: 'You already liked this post!' })
    }

    console.log(response)
  }
</script>
<div class="wrapper">
  <div class="post">
    <h1>{post.title}</h1>
    <p>{post.description}</p>
    <div class="likes">
      <button class="like" on:click={handleLike}>
        <img src="thumbsup.png" width="15px" alt="like" />
      </button>
      <span>{post.likes}</span>
    </div>
  </div>
</div>

<style>
  .wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .post {
    padding: .5em;
    width: 30em;
    box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.25);
    background-color: var(--primary);
    height: 15em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

  }
</style>