export const actions = {
  async nuxtServerInit ({ commit }) {
    const todos = await this.$axios.$get('https://jsonplaceholder.typicode.com/todos')
    commit('users/SET_USERS', Array.from(new Set(todos.map(({ userId }) => userId))))
  }
}
