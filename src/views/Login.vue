<template>
  <div class="login">
    <v-container class="my-5">
      <v-row v-if="error">
        <v-col xs="12" sm="6" offset-sm="3">
          <Alert :text="error" @dismissed="onDismissed">{{ text }}</Alert>
        </v-col>
      </v-row>
      <v-row>
        <v-col xs="12" sm="6" offset-sm="3">
          <v-card>
            <v-card-text>
              <v-container>
                <form @submit.prevent="onSignin">
                  <v-row>
                    <v-col xs="12">
                      <v-text-field
                        required
                        type="email"
                        v-model="email"
                        name="email"
                        label="Mail"
                        id="email"
                      >
                      </v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col xs="12">
                      <v-text-field
                        required
                        type="password"
                        v-model="password"
                        name="password"
                        label="Password"
                        id="password"
                      >
                      </v-text-field>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col xs="12">
                      <v-btn
                        :disabled="loading"
                        :loading="loading"
                        type="submit"
                      >
                        Login
                        <template v-slot:loader>
                          <span class="custom-loader">
                            <v-icon light>mdi-loading</v-icon>
                          </span>
                        </template>
                      </v-btn>
                    </v-col>
                  </v-row>
                </form>
              </v-container>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("/");
      }
    }
  },
  methods: {
    onDismissed() {
      //this.$store.dispatch("clearError");
    },
    onSignin() {
      this.$store.dispatch("loginUser", {
        email: this.email,
        password: this.password
      });
    }
  },
  computed: {
    loading() {
      //return this.$store.getters.loading;
    },
    error() {
      //return this.$store.getters.error;
    },
    user() {
      return this.$store.getters.user;
    }
  },
  data() {
    return {
      email: "",
      password: ""
    };
  }
};
</script>
