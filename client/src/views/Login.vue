<template>
  <div class="wrapper">
    <form action="" class="form-login" @submit.prevent="login()">
      <div class="form-login__group">
        <label for="">Username</label>
        <input type="text" v-model="username">
      </div>

      <div class="form-login__group">
        <label for="">Password</label>
        <input type="password" v-model="password">
      </div>

      <button type="submit" class="button --action-login">Login</button>
    </form>
  </div>
</template>
<script>
export default {
  data: () => ({
    username: '',
    password: ''
  }),
  methods: {
    login() {
      console.log(this.username, this.password)
    }
  }
}
</script>