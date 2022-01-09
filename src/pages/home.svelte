<script>
  import EditTodo from "../components/edit-todo.svelte";
  import ViewTodos from "../components/view-todos.svelte";
  import Header from "./../components/header.svelte";
  import { UserStore } from "./../stores";
  import page from "page";

  $: if (!$UserStore) page.redirect("/login");
</script>

<section class="home">
  <div class="wrapper">
    <Header />
    <EditTodo />
    <ViewTodos />
  </div>
</section>

<style>
  section.home {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  div.wrapper {
    width: 100%;
    max-width: 800px;
  }
</style>
