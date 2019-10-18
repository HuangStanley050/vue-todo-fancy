<template>
  <v-row wrap>
    <v-col v-for="todo in ownTodos" :key="todo.title" cols="12">
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
          <div class="text--primary">Status</div>
          <p class="text--secondar">
            {{ todo.completed }}
          </p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  computed: {
    ownTodos() {
      return this.$store.getters.ownTodos;
    }
  }
};
</script>
