<template>
  <div class="container mx-auto">
    <h1 class="text-center border-b-2 py-4">Список задач</h1>
    <users-filter
      class="fixed right-0"
      :users="users"
      @change="setFilters($event)"
    />
    <user-tasks
      class="w-4/5"
      :usersTask="todos"
    />
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import userTasks from '@/components/blocks/userTasks'
import UsersFilter from '~/components/blocks/UsersFilter'

export default {
  components: {
    UsersFilter,
    userTasks
  },
  computed: {
    ...mapGetters({
      filters: 'users/filters',
      users: 'users/users',
      todos: 'users/todos'
    })
  },
  methods: {
    ...mapMutations({
      setFilters: 'users/SET_FILTERS'
    }),
    async fetch () {
      await this.$store.dispatch('users/fetchTodos')
    }
  },
  watch: {
    filters () {
      this.fetch()
    }
  },
  mounted () {
    this.fetch()
  }
}
</script>
