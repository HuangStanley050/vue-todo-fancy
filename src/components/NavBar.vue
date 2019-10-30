<template>
  <div>
    <v-navigation-drawer v-model="drawer" absolute temporary class="info">
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="../assets/profiles/chunli.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Mighty Chun Li</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in navItems" :key="item.title" :to="item.link">
          <v-list-item-icon>
            <v-icon color="white">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <div>
      <v-app-bar app color="blue darken-2" dark>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Fancy Todos</v-toolbar-title>

        <div class="flex-grow-1"></div>

        <div class="d-none d-sm-flex d-lg-flex d-xl-flex d-md-flex">
          <v-btn
            :to="item.link"
            text
            v-for="item in navItems"
            :key="item.title"
          >
            {{ item.title }}
            <v-icon right>{{ item.icon }}</v-icon>
          </v-btn>
          <v-btn v-if="userIsAuthenticated" @click="logout">
            Logout
            <v-icon right>
              mdi-exit-to-app
            </v-icon>
          </v-btn>
        </div>
      </v-app-bar>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("logoutUser");
    }
  },
  computed: {
    userIsAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    },
    navItems() {
      let logoutItem = [
        { icon: "mdi-account", title: "Login", link: "/login" }
      ];
      let loginItems = [
        { icon: "mdi-steam", title: "Dashboard", link: "/" },
        { icon: "mdi-pen", title: "Create Todo", link: "/createTodo" },
        { icon: "mdi-account-multiple", title: "Team", link: "/team" }
        //{ icon: "mdi-exit-to-app", title: "Logout" }
      ];
      if (!this.userIsAuthenticated) {
        return logoutItem;
      } else {
        return loginItems;
      }
    }
  },
  data() {
    return {
      drawer: false
    };
  }
};
</script>
