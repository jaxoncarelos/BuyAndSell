<script>
// @ts-nocheck
  import {ToastContainer, BootstrapToast} from 'svelte-toasts';
  import {userStore} from '$lib/stores/stores.ts';
  import CreatePost from '$lib/components/CreatePost.svelte';
  import Modal from 'svelte-simple-modal'
  import {writable} from 'svelte/store'
  const modal = writable(null)
  const showModal = () => modal.set(CreatePost)

  $: user = $userStore
</script>

<ToastContainer let:data={data}>
  <BootstrapToast {data} />
</ToastContainer>


<div class="wrapper">
  <nav>
    <h2><a href="/">Buy and Sell</a></h2>
    {#key user}
    <ul>
      {#if !user }
        <li><h2><a href="/login">Login</a></h2></li>
        <li><h2><a href="/register">Register</a></h2></li>
      {:else}
        <li><h2><button on:click={showModal}><h2>Create Post</h2></button></h2></li>
        <li><h2><a href="/logout">Logout</a></h2></li>
        <li><h2><a href="/{user?.username}">{user?.username}</a></h2></li>
      {/if}
    </ul>
    {/key}
  </nav>
</div>
<div class="modalWrapper">
  <Modal show={$modal} 
  styleBg={{}}}
  styleWindow={{width: '100%', height: '100%', background: 'none'}}
  styleContent={{overflow: 'visible', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
  closeButton={false}
  ></Modal>  
</div>

<slot></slot>



<style>
  button {
    background: var(--secondary);
    color: var(--text-color);
    border: none;
    padding: 1em;
    cursor: pointer;
    color: var(--text-color);

  }
  .modalWrapper{    
    position: absolute;
    display: flex;

  }
  h2 {
    color: var(--text-color);
  }
  .wrapper {
    font-size: 1em;
    background: var(--background-color);
  }
  nav {
    padding: 1% 5% 1% 5%;
    background: var(--secondary);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  nav ul li {
    display: inline-block;
    margin-left: 1rem;
    padding: 1em;
  }
</style>