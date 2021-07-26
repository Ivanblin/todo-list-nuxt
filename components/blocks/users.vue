<template>
  <div class="flex">
    <div class="">
      <NuxtLink
        :to="'/todos/' + user.userId"
        v-for="(user, i) in usersTask"
        :key='i'
        class="block text-2xl py-1 px-2 bg-gray-200 hover:bg-red-700 mb-2"
      >
        {{user.title}}
      </NuxtLink>
    </div>
    <div
      v-for="(user, i) in users"
      :key='i'
      class="block"
    >
      <input type="checkbox">
      {{i + 1}}
    </div>
  </div>
</template>

<script>

export default {
  name: 'users',
  props: {
    usersTask: {
      type: Array,
      default: () => {
        return []
      }
    },
    users: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>
