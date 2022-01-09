<script>
  import { signInWithGoogle } from "./../services/firebase";
  import { UserStore } from "./../stores";
  import page from "page";

  $: if ($UserStore) page.redirect("/");
</script>

<div class="login container">
  <button on:click={signInWithGoogle}>Log In</button>;
</div>

<style lang="scss">
  div.login.container {
    background: hsla(238, 100%, 71%, 1);

    background: linear-gradient(
      135deg,
      hsla(238, 100%, 71%, 1) 0%,
      hsla(295, 100%, 84%, 1) 100%
    );

    background: -moz-linear-gradient(
      135deg,
      hsla(238, 100%, 71%, 1) 0%,
      hsla(295, 100%, 84%, 1) 100%
    );

    background: -webkit-linear-gradient(
      135deg,
      hsla(238, 100%, 71%, 1) 0%,
      hsla(295, 100%, 84%, 1) 100%
    );
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    button {
      background-color: hsla(350, 100%, 69%, 1);
      height: 200px;
      width: 200px;
      box-shadow: -10px -10px 15px rgb(255, 119, 142),
        10px 10px 15px rgb(231, 88, 112);
      border: none;
      border-radius: 50%;
      border: 8px solid hsla(350, 100%, 69%, 1);
      font-weight: bold;
      color: white;
      font-size: 2rem;
      &:focus {
        box-shadow: -10px -10px 15px rgb(255, 119, 142),
          10px 10px 15px rgb(231, 88, 112),
          inset -10px -10px 15px rgb(255, 119, 142),
          inset 10px 10px 15px rgb(231, 88, 112);
      }
    }
  }
</style>
