<template>
  <button @click="click" class='bg-red-700 hover:bg-red-300 px-4 py-1 rounded-md' >{{title}}</button>
</template>

<script>

export default {
  name: 'Button',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    click () {
      this.$emit('click')
    }
  }
}
</script>
