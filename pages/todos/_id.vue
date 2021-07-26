<template>
  <div class="container mx-auto">
    <h1 class="text-center mb-4">Текущая задача пользователя</h1>
    <cardTask
      :title='user.title'
      :status='user.completed'
      :user='user.userId'
    />
  </div>
</template>

<script>
import cardTask from '@/components/elements/card'

export default {
  name: '_id',
  components: {
    cardTask
  },
  validate ({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  },
  async asyncData ({ query, $axios, params }) {
    const user = await $axios.$get(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
    return { user }
  }
}
</script>
