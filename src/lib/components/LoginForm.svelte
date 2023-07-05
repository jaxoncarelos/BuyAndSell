
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

  .wrapper {
    box-shadow: 5px 8px 3px rgba(0, 0, 0, 0.25);
    border-radius: 1px;
    background: var(--primary);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40em;
    height: 40em;
    border-radius: px;
  }
  form {
    gap: .75em;
    display: inherit;
    justify-content: center;
    align-items: center;
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
    padding: .2em;
    border-radius: 3px;
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


  button {
    width: 100%;
    height: 3em;
    border-radius: 3px;
    margin: .5em;
    font-size: 1.25em;
    margin-top: 1.5em;
    /* good looking background color with var(--primary) to contrast */
    border: 4px solid var(--accent);;
    background: none;
    /* shadow */
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
</style>