<script lang="ts">
  export let data: any;
  let user = data?.user
  import { userStore } from '../lib/stores/stores';
  let loggedIn = user !== undefined;

</script>

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
    background: var(--background-color);
  }
  nav {
    padding: 0 4em 0 4em;
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
    font-size: 1.2rem;
  }
</style>