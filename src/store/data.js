import axios from "axios";
import API from "../api/";

export default {
  state: {
    userTodos: null,
    teamTodos: null
  },
  mutations: {},
  getters: {},
  actions: {
    saveTodo: async ({ commit, getters }, payload) => {
      const token = getters.user.token;
      //const wrongToken = "adsfsa";
      const creator = getters.user.email;
      const submitData = {
        title: payload.title,
        information: payload.information,
        creator: creator,
        date: payload.date
      };
      try {
        let result = await axios({
          headers: { Authorization: "bearer " + token },
          method: "post",
          url: API.createTodo,
          data: submitData
        });
        console.log(result.data);
      } catch (err) {
        console.log(err);
      }
    }
  }
};
