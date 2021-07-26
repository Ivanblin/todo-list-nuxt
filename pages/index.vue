<template>
  <div class="container mx-auto">
    <h1 class="text-center border-b-2 py-4">Список задач</h1>
    <users-tasks
      :usersTask='users'
      :users='countUsers'
    ></users-tasks>
  </div>
</template>

<script>
import usersTasks from '@/components/blocks/usersTasks'

export default {
  components: {
    usersTasks
  },
  async fetch ({ store }) {
    await store.dispatch('users/fetchTodos')
  },
  computed: {
    users () {
      return this.$store.getters['users/usersTodos']
    },
    countUsers () {
      let countUsers = 0

      this.users.forEach((user) => {
        if (countUsers < parseFloat(user.userId)) {
          countUsers = parseFloat(user.userId)
        }
      })

      return countUsers
    }
  }
}
</script>
