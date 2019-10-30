<template>
  <div>
    <h1 class="grey--text">Dashboard</h1>
    <v-container class="my-5">
      <v-row wrap>
        <v-col v-for="todo in todos" :key="todo._id" cols="12">
          <v-card class="d-flex" outlined raised>
            <v-card-text>
              <div class="text--primary">Task</div>
              <p class="text--secondary">
                {{ todo.title }}
              </p>
            </v-card-text>
            <v-card-text>
              <div class="text--primary">Details</div>
              <p class="text--secondar">
                {{ todo.information }}
              </p>
            </v-card-text>
            <v-card-text>
              <div class="text--primary">Creator</div>
              <p class="text--secondar">
                {{ todo.creator }}
              </p>
            </v-card-text>
            <v-card-text>
              <div class="text--primary">Due Date</div>
              <p class="text--secondar">
                {{ todo.dueDate }}
              </p>
            </v-card-text>
            <v-card-text>
              <div class="text--primary">Completion Status</div>
              <p class="text--secondar">
                {{ todo.completed }}
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    todos() {
      return this.$store.getters.teamTodos;
    }
    // userIsAuthenticated() {
    //   return (
    //     this.$store.getters.user !== null &&
    //     this.$store.getters.user !== undefined
    //   );
    // }
  },
  mounted() {
    this.$store.dispatch("fetchTodos");
  }
};
</script>
