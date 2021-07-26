<template>
  <div class="container mx-auto">
    <h1 class="text-center border-b-2 py-4">Список задач</h1>
    <users-block
      :usersTask='users'
      :users='countUsers'
    ></users-block>
  </div>
</template>

<script>
import usersBlock from '@/components/blocks/users'

export default {
  components: {
    usersBlock
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
