<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Create ToDo</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Todo Form</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="title"
                  label="Title*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  v-model="information"
                  label="Information*"
                  hint="Enter todo here..."
                  required
                ></v-textarea>
              </v-col>
              <v-col col="12">
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :return-value.sync="date"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="date"
                      label="Due Date*"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="date" no-title scrollable>
                    <div class="flex-grow-1"></div>
                    <v-btn text color="primary" @click="menu = false"
                      >Cancel</v-btn
                    >
                    <v-btn text color="primary" @click="$refs.menu.save(date)"
                      >OK</v-btn
                    >
                  </v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
          </v-container>
          <small class="red--text">*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="blue darken-1" text @click="dialog = false"
            >Close</v-btn
          >
          <v-btn color="blue darken-1" text @click="onSubmitTodo">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  methods: {
    onSubmitTodo() {
      this.dialog = false;
      if (!this.title || !this.date || !this.information) {
        alert("form can't be empty");
        return;
      }
      //send action and save the todo in database
      this.$store.dispatch("saveTodo", {
        title: this.title,
        information: this.information,
        date: this.date
      });
      (this.title = ""),
        (this.information = ""),
        (this.date = new Date().toISOString().substr(0, 10));
    }
  },
  data() {
    return {
      dialog: false,
      title: "",
      information: "",
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false
    };
  }
};
</script>
