<script lang="ts">
	import RegisterForm from "$lib/components/RegisterForm.svelte";
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
  <RegisterForm />
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