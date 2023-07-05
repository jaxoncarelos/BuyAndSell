
<div class="wrapper">
  <form method="post">
    <label for="username">Username</label>
    <input type="text" id="username" name="username" placeholder="Username" />
    <label for="password">Password</label>
    <input type="password" id="password" name="password" placeholder="Password" />
    <label for="password">Confirm Password</label>
    <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Password" />
    <label for="email">Email</label>
    <input type="email" id="email" name="email" placeholder="Email" />
    <label for="firstName">First Name</label>
    <input type="text" id="firstName" name="firstName" placeholder="First Name" />
    <label for="lastName">Last Name</label>
    <input type="text" id="lastName" name="lastName" placeholder="Last Name" />
    <button type="submit">Register</button>
  </form>
</div>


<style>
  button {
    width: 15em;
    height: 3em;
    border-radius: 5px;
    margin: 1em;
    background-color: var(--secondary);
    border-color: var(--text-color);
  }
  .wrapper {
    background: var(--primary);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40em;
    height: 40em;
    border-radius: 5px;
  }
  form {
    display: inherit;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  input {
    border: 0.2px solid var(--accent);
    border-radius: 5px;
    padding: 6px 12px;
    background: #ddd;
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