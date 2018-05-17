<template>
  <transition name="fade" mode="out-in">
    <div id="signup">
      <h3 class="title">회원가입</h3>
      <form @submit.prevent="onSubmit" id="signup-form">
        <div>
          <input class="input" id="sign-input-name" type="text" placeholder="이름">
        </div>
        <div>
          <input class="input" id="sign-input-age" type="number" min="1" max="150" placeholder="나이">
          남<input type="radio" name="gender" value="0" checked>
          여<input type="radio" name="gender" value="1">
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
    onSubmit: function () {
      const name = document.getElementById('sign-input-name').value
      const id = document.getElementById('sign-input-id').value
      const age = document.getElementById('sign-input-age').value
      const gender = document.querySelector('input[name="gender"]:checked').value
      const password1 = document.getElementById('sign-input-password-1').value
      const password2 = document.getElementById('sign-input-password-2').value

      if(name && id && age && gender && password1 && password2) {
        if(name.match(/^[a-zA-Z가힣]{2,6}$/)) {
          if(id.match(/^[a-zA-Z0-9]{6,14}$/)) {
            if(password1 === password2) {
              // this.$http.post('/process/login', {id: id, password: password}).then(result => {
              //   console.log(result)
              // }).catch(e => {
              //   console.log(e)
              // })
            } else {
              this.$emit('modal', {header: '알림', body: '비밀번호를 다시 확인해주세요!'})
            }
          } else {
            this.$emit('modal', {header: '알림', body: '아이디는 영문 및 숫자 6~14 자리입니다!'})
          }
        } else {
          this.$emit('modal', {header: '알림', body: '이름은 2~6 자리입니다!'})
        }
      } else {
        this.$emit('modal', {header: '알림', body: '빈칸을 모두 입력해주세요!'})
      }
    }
  }
}
</script>

<style>

#signup {
  background-color: #fff;
  width: 20%;
  height: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
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

.margin-vertical {
  margin: 5px 0;
}

@media (max-width: 768px) {
  #signup {
    width: 80%;
    height: 50%;
  }
}

</style>
