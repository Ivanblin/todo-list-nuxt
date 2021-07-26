export const state = () => ({
  usersTodos: null,
  userTodo: null,
  userId: 2
})

export const mutations = {
  SET_USERS_TODOS: (state, users) => {
    state.usersTodos = users
  },
  SET_USER_TODO: (state, users) => {
    state.userTodo = users
  }
}

export const actions = {
  async fetchTodos ({ commit }) {
    const usersTodos = await this.$axios.$get('https://jsonplaceholder.typicode.com/todos')
    console.log(usersTodos)
    commit('SET_USERS_TODOS', usersTodos)
  },
  async fetchTodoUser ({ commit, userId }) {
    const userTodo = await this.$axios.$get(`https://jsonplaceholder.typicode.com/todos/${userId}`)
    console.log(userTodo)
    commit('SET_USER_TODO', userTodo)
  }
}

export const getters = {
  usersTodos: state => state.usersTodos,
  userTodo: state => state.userTodo,
  userId: state => state.userId
}
