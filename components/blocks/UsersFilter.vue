<template>
  <div>
    <div
      v-for="userId of users"
      :key="userId"
      class="block"
    >
      <input
        :id="userId"
        type="checkbox"
        :value="userId"
        v-model="checks">
      <label :for="userId"> User {{ userId }} </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UsersFilter',
  props: {
    users: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      checks: []
    }
  },
  watch: {
    checks (newValue) {
      this.$emit('change', newValue)
    }
  }
}
</script>

<style scoped>

</style>
