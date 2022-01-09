<script>
  import TodoItem from "./todo-item.svelte";
  import { TodoStore } from "./../stores";
  let activeTab = "incomplete";

  $: console.log($TodoStore);
  $: incompleteTodos = $TodoStore
    .filter((todo) => !todo.completed)
    .sort((todoA, todoB) => todoB.priority - todoA.priority);
  $: completeTodos = $TodoStore.filter((todo) => todo.completed);
</script>

<main>
  <header>
    <button
      on:click={() => (activeTab = "incomplete")}
      class:active={activeTab === "incomplete"}
      >Current Todos ({incompleteTodos.length})</button
    >
    <button
      on:click={() => (activeTab = "complete")}
      class:active={activeTab === "complete"}
      >Completed Todos ({completeTodos.length})</button
    >
  </header>
  <div class="todos">
    {#if activeTab === "incomplete"}
      {#each incompleteTodos as todo (todo.id)}
        <TodoItem {todo} />
      {/each}
    {:else}
      {#each completeTodos as todo (todo.id)}
        <TodoItem {todo} />
      {/each}
    {/if}
  </div>
</main>

<style lang="scss">
  main {
    header {
      display: flex;
      justify-content: space-between;
      padding: 2rem;
      button {
        background: none;
        border: none;
        font-size: 1.4rem;
        padding-bottom: 0.5rem;
        &.active {
          border-bottom: solid 1px #333;
        }
      }
    }
    .todos {
      padding: 1rem 2rem;
    }
  }
</style>
