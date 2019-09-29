<template>
  <v-app style="background: #0D47A1;">
    <NavBar />
    <v-content>
      <router-view> </router-view>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";
export default {
  name: "App",
  components: {
    NavBar
  },
  data: () => ({
    //
  })
};
</script>
