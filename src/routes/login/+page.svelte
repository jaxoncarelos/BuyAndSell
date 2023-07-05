<script lang="ts">
	import LoginForm from "$lib/components/LoginForm.svelte";
  import {toasts} from 'svelte-toasts';
  export let form;
  if(form)
  {
      const toast = toasts.add({
        type: 'error',
        title: 'Error',
        description: form as string,
        duration: 2000,
      })
  }
</script>
<div class="wrapper">
  <LoginForm />
</div>

<style>
  .wrapper{
    width: 100%;
    height: 100vh; 
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>