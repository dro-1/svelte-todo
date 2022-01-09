<script>
  import { UserStore } from "./../stores";
  import { addTodo } from "./../services/firebase";

  let name = "";
  let priority = "1";

  const submitTodo = () => {
    const newTodo = {
      priority,
      name,
      completed: false,
    };
    console.log(newTodo);
    addTodo(newTodo, $UserStore.uid);
  };
</script>

<form>
  <header>Add New Todo</header>

  <label for="name">
    Todo Name
    <input bind:value={name} id="name" type="text" />
  </label>

  <label for="priority">
    Todo Priority
    <input
      bind:value={priority}
      id="priority"
      min="1"
      step="1"
      max="5"
      type="range"
    />
  </label>

  <button on:click|preventDefault={submitTodo}>Add Todo</button>
</form>

<style lang="scss">
  form {
    background: #fff;
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
    padding: 2rem 4rem;
    header {
      font-size: 2rem;
      text-align: center;
      font-weight: bold;
      margin-bottom: 1rem;
    }
    label {
      font-size: 1.4rem;
      margin-bottom: 1rem;
      display: block;
      input {
        display: block;
        width: 100%;
        margin-top: 0.5rem;
        border-radius: 1rem;
      }
      &:nth-child(2) {
        input {
          padding: 0.5rem;
        }
      }
    }
    button {
      padding: 1rem;
      border: none;
      background: #f2f9ff;
      font-size: 1.4rem;
      border-radius: 5px;
      margin-top: 1rem;
      border: solid 1px #ccc;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
    }
  }
</style>
