<template>
  <div>
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
    }
  }
}
</script>
