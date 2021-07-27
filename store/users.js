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
  // SET_USER_TODO: (state, users) => {
  //   state.userTodo = users
  //   console.log(state.userTodo)
  // }
  // SET_TASK_ID: (state, taskId) => {
  //   state.taskId = taskId
  //   console.log(state.taskId)
  // }
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
  // async fetchTodoUser ({ commit, state }) {
  //   const userTodo = await this.$axios.$get('https://jsonplaceholder.typicode.com/todos/9')
  //   // console.log(userTodo)
  //   console.log('taskId', this.taskId)
  //   commit('SET_USER_TODO', userTodo)
  //   // commit('SET_USER_ID', userTodo)
  // }
}

export const getters = {
  todos: state => state.todos,
  filters: state => state.filters,
  users: state => state.users
}
