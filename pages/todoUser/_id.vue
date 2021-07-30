<template>
  <div class="container mx-auto">
    <NuxtLink to="/">
      <Btn title='На главную'/>
    </NuxtLink>
    <h1 class="text-center mb-4">Текущая задача пользователя</h1>
    <cardTask
      :title='user.title'
      :status='user.completed'
      :user='user.userId'
    />
    <NuxtLink :to="'/todosUser/' + user.userId">
      <Btn title='Посмотреть список всех задач пользователя'/>
    </NuxtLink>
  </div>
</template>

<script>
import cardTask from '@/components/elements/card'
import Btn from '@/components/ui/button'

export default {
  name: '_id',
  components: {
    cardTask,
    Btn
  },
  validate ({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  },
  async asyncData ({ $axios, params }) {
    const user = await $axios.$get(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
    return { user }
  }
}
</script>
