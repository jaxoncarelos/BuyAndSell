
<div class="wrapper">
  <form method="post">
    <label for="username">Username</label>
    <input type="text" id="username" name="username" />
    <label for="password">Password</label>
    <input type="password" id="password" name="password" />
    <button type="submit">Login</button>
  </form>
</div>



<style>
  button {
    width: 100%;
    height: 4em;
    border-radius: 5px;
    margin: 1em;
    font-size: 1em;
    background-color: #7092db;
    border: none;
    /* shadow */
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .wrapper {
    box-shadow: 5px 8px 3px rgba(0, 0, 0, 0.25);
    border-radius: 1px;
    background: var(--primary);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50em;
    height: 50em;
    border-radius: px;
  }
  form {
    display: inherit;
    justify-content: center;
    align-items: center;
    /* put gap between */
    gap: .6em;
    flex-direction: column;
  }
  label {
    align-self: flex-start;
    text-align: left;
    font-size: 1.5em;
  }
  input {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    font-size: 1.5em;
    border: 0.2px solid var(--accent);
    border-radius: 10px;
    padding: .5em;
    width: 20em;
    background: var(--secondary);
  }
  input:hover{
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
  input:focus{
    background: var(--secondary);
    color: #555;
    box-shadow: rgba(0, 0, 0, 0.1) 20px 24px 60px;
  }

  input::placeholder {
    color: rgba(0,0,0,0.5);
    text-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }

</style>