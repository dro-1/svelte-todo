<script>
  import router from "page";
  import Home from "./pages/home.svelte";
  import Login from "./pages/login.svelte";
  import { getAuth, onAuthStateChanged } from "firebase/auth";
  import { UserStore } from "./stores";
  import { onMount } from "svelte";
  import { getTodos } from "./services/firebase";

  const auth = getAuth();
  onMount(async () => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        UserStore.set(user);
        getTodos(user.uid);
      } else {
        UserStore.set(user);
        getTodos(user.uid);
        console.log("User signed out");
      }
    });
  });

  let page;

  router("/", (ctx, next) => (page = Home));

  router("/login", (ctx, next) => (page = Login));

  router.start();
</script>

<svelte:component this={page} />
