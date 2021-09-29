<template>
  <div class="wrapper">
    <form action="" class="form-login" @submit.prevent="register()">
      <h3>Punch Clock - Register</h3>
      <div class="form-login__group">
        <label for="">Username</label>
        <input type="text" v-model="username">
      </div>

      <div class="form-login__group">
        <label for="">Password</label>
        <input type="password" v-model="password">
      </div>

      <button type="submit" class="button --action-login">Register</button>
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
    register() {
      let username = this.username;
      let password = this.password;

      if(username.replaceAll(' ', '').length == 0) return;
      if(password.replaceAll(' ', '').length == 0) return;

      this.$store.dispatch('registerUser', {username, password});
    }
  }
}
</script>