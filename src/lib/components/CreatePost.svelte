<div class="wrapper">
  <form method="post">
    <label for="title">Title</label>
    <input type="text" id="title" name="title" />
    <label for="description">Description</label>
    <textarea id="description" name="description"></textarea>
    <button type="submit">Create Post</button>
  </form>
</div>

<style>
  .wrapper {
    opacity: 0.95;
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
    width: 50%;
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
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 1.5em;
    border: 0.2px solid var(--accent);
    padding: .2em;
    border-radius: 3px;
    width: 100%;
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
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  }

  textarea {
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 1.5em;
    border: 0.2px solid var(--accent);
    padding: .2em;
    border-radius: 3px;
    width: 100%;
    height: 10em;
    background: var(--secondary);
    resize: none;
  }
</style>