import axios from "axios";
import API from "../api/";

export default {
  state: {
    userTodos: null,
    teamTodos: null
  },
  mutations: {
    completeTask: (state, payload) => {
      state.userTodos.forEach(todo => {
        if (todo.id === payload) {
          todo.completed = true;
        }
      });
    },
    deleteTask: (state, payload) => {
      state.userTodos = state.userTodos.filter(
        userTodo => userTodo.id !== payload
      );
    },
    clearData: state => {
      state.userTodos = null;
      state.teamTodos = null;
    },
    addTodos: (state, payload) => {
      //state.teamTodos.push(payload);
      state.userTodos.push(payload);
    },
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
    sendEmail: async ({ commit, getters }, payload) => {
      console.log(payload);
      const token = getters.user.token;
      try {
        let result = await axios({
          headers: { Authorization: `bearer ${token}` },
          method: "post",
          url: API.email,
          data: { id: payload }
        });
        console.log(result.data);
      } catch (err) {
        console.log(err);
      }
    },
    completeTask: async ({ commit, getters }, payload) => {
      //console.log("complete todo: ", payload);
      const token = getters.user.token;
      try {
        await axios({
          headers: { Authorization: `bearer ${token}` },
          method: "patch",
          url: API.completeTodo + `${payload}`
        });
        commit("completeTask", payload);
      } catch (err) {
        console.log(err);
      }
    },
    deleteTodo: async ({ commit, getters }, payload) => {
      const token = getters.user.token;
      try {
        await axios({
          headers: { Authorization: `bearer ${token}` },
          method: "delete",
          url: API.deleteTodo + `${payload}`
        });
        commit("deleteTask", payload);
      } catch (err) {
        console.log(err);
      }
    },
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
          id: task._id,
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

        const {
          _id,
          title,
          information,
          creator,
          dueDate,
          completed
        } = result.data.newTask;

        const newTask = {
          _id,
          title,
          information,
          creator,
          dueDate,
          completed
        };

        //const saveTodo = { ...submitData, completed: false };
        commit("addTodos", newTask);
      } catch (err) {
        console.log(err);
      }
    }
  }
};
