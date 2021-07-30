<template>
  <div class="container mx-auto">
    <NuxtLink to="/">
      <Btn title='На главную'/>
    </NuxtLink>
    <h1 class="text-center mb-4">Все задачи пользователя</h1>
    <user-tasks
      :usersTask="users"
    />
  </div>
</template>

<script>
import userTasks from '@/components/blocks/userTasks'
import Btn from '@/components/ui/button'

export default {
  name: '_id',
  components: {
    userTasks,
    Btn
  },
  validate ({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  },
  async asyncData ({ $axios, params }) {
    const users = await $axios.$get(`https://jsonplaceholder.typicode.com/todos?userId=${params.id}`)
    return { users }
  }
}
</script>
