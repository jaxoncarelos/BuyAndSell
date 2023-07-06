<script>
// @ts-nocheck
  import {ToastContainer, BootstrapToast} from 'svelte-toasts';
  import {userStore} from '$lib/stores/stores.ts';
  import CreatePost from '$lib/components/CreatePost.svelte';
  import Modal from 'svelte-simple-modal'
  import {writable} from 'svelte/store'
  const modal = writable(null)
  const showModal = () => modal.set(CreatePost)
  console.log("User store", $userStore)
  $:User = $userStore;
  let loggedIn = false
  $:{
    loggedIn = User !== undefined;
    console.log(User, loggedIn)
  }

</script>

<ToastContainer let:data={data}>
  <BootstrapToast {data} />
</ToastContainer>


<div class="wrapper">
  <nav>
    <h2><a href="/">Buy and Sell</a></h2>
    {#key loggedIn}
    <ul>
      {#if !loggedIn }
        <li><h2><a href="/login">Login</a></h2></li>
        <li><h2><a href="/register">Register</a></h2></li>
      {:else}
        <li><h2><button on:click={showModal}>Create Post</button></h2></li>
        <li><h2><a href="/logout">Logout</a></h2></li>
        <li><h2><a href="/{User?.firstName}">{User?.firstName}</a></h2></li>
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