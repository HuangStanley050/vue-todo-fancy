import Vue from "vue";
import Router from "vue-router";
import DashBoard from "./views/DashBoard.vue";
import Login from "./views/Login.vue";
import CreateTodo from "./views/CreateTodo.vue";
import Team from "./views/Team.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: DashBoard
    },
    {
      path: "/createTodo",
      name: "createTodo",
      component: CreateTodo
    },
    {
      path: "/team",
      name: "team",
      component: Team
    },
    {
      path: "/login",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Login
    }
  ]
});
