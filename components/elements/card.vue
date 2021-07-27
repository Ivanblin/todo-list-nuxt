<template>
    <NuxtLink
      :to="link"
      :class="{'card': true, 'hover:bg-red-700 cursor-pointer': active}"
    >
      <span>{{title}} <br>User {{user}}</span>
      <span v-if="!status">close</span>
      <span v-if="status">open</span>
    </NuxtLink>
</template>

<script>

export default {
  name: 'card',
  props: {
    title: {
      type: String,
      default: ''
    },
    user: {
      type: Number,
      default: 0
    },
    link: {
      type: String,
      default: ''
    },
    status: {
      type: Boolean,
      default: true
    },
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>
