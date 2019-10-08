<template>
  <div>
    <h1 class="grey--text">Createtodo</h1>
    <v-container class="my-5">
      <CreateTodo> </CreateTodo>
      <TodoList> </TodoList>
    </v-container>
  </div>
</template>
<script>
import CreateTodo from "../components/CreateTodo.vue";
import TodoList from "../components/TodoList.vue";
export default {
  components: {
    CreateTodo,
    TodoList
  }
};
</script>
