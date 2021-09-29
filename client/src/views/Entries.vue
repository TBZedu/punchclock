<template>
  <p></p>
</template>
<script>
export default {
  setup() {
    
  },
  mounted() {
    this.$store.dispatch('fetchEntries')
  }
}
</script>