<template>
  <div class="flex">
    <div class="w-full">
      <div v-for="(user, i) in usersTask" :key='i' @click="click(user.id)">
        <cardTask
        :title='user.title'
        :link="'/todos/' + user.id"
        :user='user.userId'
        :status='user.completed'
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
  },
  methods: {
    click (e) {
      this.$store.commit('users/SET_USER_ID', e)
    }
  }
}
</script>
