import API from "../api/";
import axios from "axios";
import router from "../router";

export default {
  state: {
    user: null
  },
  mutations: {
    setUser: (state, payload) => {
      state.user = payload;
    },
    logout: state => {
      state.user = null;
    }
  },
  getters: {
    user(state) {
      return state.user;
    }
  },
  actions: {
    logoutUser: ({ commit }) => {
      if (window.confirm("Are you logging out?")) {
        commit("logout");
        commit("clearData");
        router.push("/login");
      }
    },
    loginUser: async ({ commit }, payload) => {
      try {
        let loginResult = await axios.post(API.login, {
          email: payload.email,
          password: payload.password
        });

        let userData = loginResult.data.data;
        commit("setUser", userData);
      } catch (err) {
        console.log(err);
      }
    }
  }
};
