export const state = () => ({
  todos: [],
  filters: [],
  users: []
})

export const mutations = {
  SET_TODOS (state, users) {
    state.todos = users
  },
  SET_FILTERS (state, payload) {
    state.filters = payload
  },
  SET_USERS (state, payload) {
    state.users = payload
  }
}

export const actions = {
  async fetchTodos ({ commit, state }, users = []) {
    const todos = await this.$axios.$get('https://jsonplaceholder.typicode.com/todos', {
      params: {
        userId: state.filters
      }
    })
    commit('SET_TODOS', todos)
  }
}

export const getters = {
  todos: state => state.todos,
  filters: state => state.filters,
  users: state => state.users
}
