<script>
// @ts-nocheck

  import {toasts, ToastContainer, BootstrapToast} from 'svelte-toasts';
  const options = {
    duration: 2000,
  }

  export let data;
  let user = data?.user
  let loggedIn = user !== undefined;

</script>

<ToastContainer let:data={data}>
  <BootstrapToast {data} />
</ToastContainer>

<div class="wrapper">
  <nav>
    <h2><a href="/">Buy and Sell</a></h2>
    <ul>
      {#if !loggedIn }
        <li><a href="/login">Login</a></li>
        <li><a href="/register">Register</a></li>
      {:else}
        <h1>{user?.firstName}</h1>
      {/if}
    </ul>
  </nav>
</div>

<slot></slot>



<style>
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