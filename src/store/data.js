export default {
  state: {
    userTodos: null,
    teamTodos: null
  },
  mutations: {},
  getters: {},
  actions: {
    saveTodo: async ({ commit }, payload) => {
      console.log(payload);
    }
  }
};
