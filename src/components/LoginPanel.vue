<template>
  <transition name="fade" mode="out-in">
    <div id="login">
      <h3 class="title">로그인</h3>
      <form @submit.prevent="onSubmit" id="login-form">
        <div>
          <input class="input" id="input-id" type="text" placeholder="아이디">
        </div>
        <div>
          <input class="input" id="input-password" type="password" placeholder="비밀번호">
        </div>
        <div>
          <input class="button btn-primary" id="login-btn" type="submit" value="로그인">
        </div>
      </form>
      <router-link to="/signup" id="signup-btn">회원가입</router-link>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    onSubmit: function () {
      const id = document.getElementById('input-id').value
      const password = document.getElementById('input-password').value
      // this.$http.post('/process/login', {id: id, password: password}).then(user => {
      //   console.log(user)
      //   this.$store.state.id = user.id
      //   this.$store.state.name = user.name
      //   this.$store.state.age = user.age
      //   this.$store.state.gender = user.gender
      //   this.$emit('onLogin')
      // }).catch(e => {
      //   console.log(e)
      // })
      console.log(id, password)
      this.$emit('onLogin')
    }
  }
}
</script>

<style>

#login {
  background-color: #fff;
  width: 20%;
  height: 40%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

#login-form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

#login-btn {
  margin-top: 20px;
}

#signup-btn {
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

@media (max-width: 768px) {
  #login {
    width: 80%;
    height: 40%;
  }
}

</style>
