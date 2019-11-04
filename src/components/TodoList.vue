<template>
  <v-row wrap>
    <v-col v-for="todo in ownTodos" :key="todo._id" cols="12">
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
        <v-card-actions>
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn
                @click="sendMail(todo)"
                v-on="on"
                class="mx-2"
                fab
                dark
                small
                color="primary"
              >
                <v-icon dark>mdi-email</v-icon>
              </v-btn>
            </template>
            <span>Send Reminder</span>
          </v-tooltip>

          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn
                @click="deleteTodo(todo)"
                v-on="on"
                class="mx-2"
                fab
                dark
                small
                color="primary"
              >
                <v-icon dark>mdi-minus</v-icon>
              </v-btn>
            </template>
            <span>Delete Task</span>
          </v-tooltip>

          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn
                @click="completeTodo(todo)"
                :disabled="todo.completed"
                v-on="on"
                class="mx-2"
                fab
                light
                small
                color="red"
              >
                <v-icon dark>mdi-pencil</v-icon>
              </v-btn>
            </template>
            <span>task Done</span>
          </v-tooltip>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  methods: {
    completeTodo(todo) {
      const id = todo.id;
      this.$store.dispatch("completeTask", id);
    },
    deleteTodo(todo) {
      const id = todo.id;
      this.$store.dispatch("deleteTodo", id);
    },
    sendMail(todo) {
      const id = todo.id;
      this.$store.dispatch("sendEmail", id);
    }
  },
  computed: {
    ownTodos() {
      return this.$store.getters.ownTodos;
    }
  }
};
</script>
