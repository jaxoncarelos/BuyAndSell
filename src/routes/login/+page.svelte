<script lang="ts">
	import LoginForm from "$lib/components/LoginForm.svelte";
  import { userStore } from "$lib/stores/stores.js";
  import {toasts} from 'svelte-toasts';
  export let form;
  export let data;
  if(form)
  {
      toasts.add({
        type: 'error',
        title: 'Error',
        description: form as string,
        duration: 2000,
      })
  }
  $:clearUser = data?.clearUser;

  $:{
    if(clearUser) userStore.set(undefined)
  }
</script>
<div class="wrapper">
  <LoginForm />
</div>

<style>
  .wrapper{
    width: 100%;
    height: 80vh; 
    display: flex;
    justify-content: center;
    align-items: center;

  }
</style>