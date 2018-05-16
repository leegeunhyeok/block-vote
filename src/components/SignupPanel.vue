<template>
  <transition name="fade" mode="out-in">
    <div id="signup">
      <h3 class="title">회원가입</h3>
      <form @submit.prevent="onSubmit" id="signup-form">
        <div>
          <input class="input" id="sign-input-name" type="text" placeholder="이름">
        </div>
        <div>
          <input class="input" id="sign-input-id" type="text" placeholder="아이디">
        </div>
        <div>
          <input class="input" id="sign-input-password-1" type="password" placeholder="비밀번호">
        </div>
        <div>
          <input class="input" id="sign-input-password-2" type="password" placeholder="비밀번호 재입력">
        </div>
        <div>
          <input class="button btn-primary" id="login-btn" type="submit" value="제출">
        </div>
      </form>
      <router-link to="/login" id="signup-btn">로그인</router-link>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'Signup',
  methods: {
    onSubmit: function() {
      const name = document.getElementById('sign-input-name').value
      const id = document.getElementById('sign-input-id').value
      const password1 = document.getElementById('sign-input-password-1').value
      const password2 = document.getElementById('sign-input-password-2').value
      // this.$http.post('/process/login', {id: id, password: password}).then(result => {
      //   console.log(result)
      // }).catch(e => {
      //   console.log(e)
      // })
      console.log(name)
    }
  }
}
</script>

<style>

#signup {
  background-color: #fff;
  width: 20%;
  height: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

#signup-form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

#signup-btn {
  margin-top: 20px;
}

#signup-btn {
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

@media (max-width: 768px) {
  #signup {
    width: 80%;
    height: 50%;
  }
}

</style>
