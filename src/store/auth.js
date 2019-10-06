import API from "../api/";
import axios from "axios";

export default {
  state: {
    user: null
  },
  mutations: {
    setUser: (state, payload) => {
      state.user = payload;
    }
  },
  getters: {
    user(state) {
      return state.user;
    }
  },
  actions: {
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
