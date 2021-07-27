<template>
  <div class="container mx-auto">
    <h1 class="text-center border-b-2 py-4">Список задач</h1>
    {{ filters }}
    <users-filter
      :users="users"
      @change="setFilters($event)"
    />
    <users-tasks
      :usersTask="todos"
    />
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import usersTasks from '@/components/blocks/usersTasks'
import UsersFilter from '~/components/blocks/UsersFilter'

export default {
  components: {
    UsersFilter,
    usersTasks
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
