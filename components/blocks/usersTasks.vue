<template>
  <div class="flex">
    <div class="w-full">
      <div v-for="(task, i) in usersTask" :key='i'>
        <cardTask
          :title='task.title'
          :link="'/todoUser/' + task.id"
          :user='task.userId'
          :status='task.completed'
          active
        />
      </div>
    </div>
    <div class="fixed right-0">
      <div
      v-for="(user, i) in users"
      :key='i'
      class="block"
    >
      <input type="checkbox">
      User {{i + 1}}
    </div>
    </div>
  </div>
</template>

<script>
import cardTask from '@/components/elements/card'

export default {
  name: 'usersTasks',
  components: {
    cardTask
  },
  props: {
    usersTask: {
      type: Array,
      default: () => {
        return []
      }
    },
    users: {
      type: Number
    }
  }
}
</script>
