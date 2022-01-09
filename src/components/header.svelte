<script>
  import { logOut } from "./../services/firebase";
  import { UserStore } from "./../stores";
</script>

<header>
  {#if $UserStore}
    <img src={$UserStore.photoURL} alt="User" />
    <p>Welcome, {$UserStore.displayName.split(" ")[0]}</p>
  {/if}
  <button on:click={logOut}> Log Out </button>
</header>

<style lang="scss">
  header {
    width: 100%;
    background-color: lightsteelblue;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    & > img {
      height: 6rem;
      width: 6rem;
      border-radius: 50%;
    }
    & > p {
      font-size: 2rem;
      text-align: center;
    }
    & > button {
      font-size: 1.5rem;
      border: none;
      padding: 1rem;
      background-color: rgba(255, 0, 0, 0.5);
      color: white;
      border-radius: 0.5rem;
    }
  }
</style>
