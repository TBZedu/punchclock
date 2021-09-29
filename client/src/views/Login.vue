<template>
  <div class="wrapper">
    <form action="">
      <input type="text" v-model="username">
      <input type="text" v-model="password">
    </form>
  </div>
</template>
<script>
export default {
  setup() {
    
  },
  data: () => ({
    username: '',
    password: ''
  })
}
</script>