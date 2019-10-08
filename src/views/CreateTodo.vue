<template>
  <div>
    <h1 class="grey--text">Createtodo</h1>
    <v-container class="my-5">
      <CreateTodo> </CreateTodo>
    </v-container>
  </div>
</template>
<script>
import CreateTodo from "../components/CreateTodo.vue";
export default {
  components: {
    CreateTodo
  }
};
</script>
