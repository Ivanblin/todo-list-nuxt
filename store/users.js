export const state = () => ({
  usersTodos: null
  // userTodo: null
  // taskId: null
})

export const mutations = {
  SET_USERS_TODOS: (state, users) => {
    state.usersTodos = users
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
  async fetchTodos ({ commit }) {
    const usersTodos = await this.$axios.$get('https://jsonplaceholder.typicode.com/todos')
    // console.log(usersTodos)
    commit('SET_USERS_TODOS', usersTodos)
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
  usersTodos: state => state.usersTodos
  // userTodo: state => state.userTodo
  // taskId: state => state.taskId
}
