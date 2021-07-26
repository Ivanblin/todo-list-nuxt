<template>
  <div class="">dsfsdf {{users}}</div>
</template>

<script>
export default {
  async fetch ({ store }) {
    await store.dispatch('users/fetchTodoUser')
  },
  computed: {
    users () {
      return this.$store.getters['users/userTodo']
    }
  }
}
</script>
