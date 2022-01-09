<script>
  export let todo = null;
  import TickIcon from "./../assets/tick.svg";
  import CancelIcon from "./../assets/cancel.svg";
  import StarIcon from "./../assets/star.svg";
  import { markTodo } from "./../services/firebase";

  $: ratings = new Array(todo.priority);
</script>

<div class="todo">
  <button on:click={() => markTodo(!todo.completed, todo.id)}>
    {#if todo.completed}
      <CancelIcon width="100%" fill="#fff" />
    {:else}
      <TickIcon width="100%" fill="#fff" />
    {/if}
  </button>
  <div class="info">
    <p class:cancel={todo.completed}>{todo.name}</p>
    <div class="stars">
      {#each ratings as _}
        <StarIcon width="20px" />
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  .todo {
    display: flex;
    align-items: center;
    width: 100%;
    &:not(:last-child) {
      margin-bottom: 10px;
    }
    button {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      padding: 1rem;
      border: none;
      background: #1890ff;
      margin-right: 1rem;
    }
    .info {
      p {
        font-size: 1.4rem;
        margin-bottom: 0.5rem;
        &.cancel {
          text-decoration: line-through;
        }
      }
    }
  }
</style>
