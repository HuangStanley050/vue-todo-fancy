import axios from "axios";
import API from "../api/";

export default {
  state: {
    userTodos: null,
    teamTodos: null
  },
  mutations: {
    setTeamTodos: (state, payload) => {
      state.teamTodos = payload;
    },
    setOwnTodos: (state, payload) => {
      let creator = payload;

      let ownTodos = state.teamTodos.filter(todo => todo.creator === creator);
      state.userTodos = ownTodos;
    }
  },
  getters: {
    ownTodos(state) {
      return state.userTodos;
    },
    teamTodos(state) {
      return state.teamTodos;
    }
  },
  actions: {
    fetchTodos: async ({ commit, getters }) => {
      const token = getters.user.token;
      const creator = getters.user.email;
      try {
        let result = await axios({
          headers: { Authorization: `bearer ${token}` },
          method: "get",
          url: API.fetchTodos
        });
        let tasks = result.data.tasks;
        let teamTodos = tasks.map(task => ({
          creator: task.creator,
          title: task.title,
          information: task.information,
          dueDate: task.dueDate,
          completed: task.completed
        }));
        commit("setTeamTodos", teamTodos);
        commit("setOwnTodos", creator);
      } catch (err) {
        console.log(err);
      }
    },
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
        //console.log(result.data);
      } catch (err) {
        console.log(err);
      }
    }
  }
};
