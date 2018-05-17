<template>
  <transition name="fade" mode="out-in">
    <div id="main">
      <div id="main-header">
        <div id="main-header-menu">
          <a @click="logout">로그아웃</a>
          &nbsp;
          <a @click="myInfo">내 정보</a>
        </div>
        <div id="main-message">
          <div id="main-message-title" @click="onHome">
            {{ messageTitle }}
          </div>
          <br>
          {{ message }}
        </div>
        <div id="search-area">
          <input id="search-input" type="text" placeholder="참가 코드" v-model="code" @keypress.enter="onSearch">
          <input id="search-button" type="button" value="V" @click="onSearch">
        </div>
      </div>
      <router-view @create="createVote" @history="historyVote" @modal="onModal"></router-view>
      <div id="main-footer">Developed by Geunhyeok LEE</div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      messageTitle: 'BlockVote',
      message: '투표에 참여하세요!',
      code: ''
    }
  },
  created () {
    // 세션 체크 
    if(!this.$store.state.id) {
      this.$router.push({name: 'Login'})
    }
    this.$router.push({name: 'Home'})
  },
  methods: {
    onSearch () {
      const code = this.code.replace(/ /gi, '').trim()
      if(code) {
        console.log(code) // 투표 참가
      } else {
        this.$emit('modal', {header: '알림', body: '참가 코드를 입력해주세요!'})
      }
    },
    onModal (data) {
      console.log(data)
      this.$emit('modal', data)
    },
    onHome () {
      this.$router.push({name: 'Home'})
    },
    logout () {
      this.$http.post('/process/logout').then(result => {
        this.$router.push({name: 'Login'})
      }).catch(e => {
        this.$emit('modal', {header: '오류', body: '로그아웃 실패'})
      })
    },
    myInfo () {
      this.$router.push({name: 'Mypage'})
    },
    createVote () {
      this.$router.push({name: 'Create'})
    },
    historyVote () {
      this.$router.push({name: 'History'})
    }
  }
}
</script>

<style>

#main {
  background-color: #fff;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}

#main a {
  cursor: pointer;
}

#main-message-title {
  cursor: pointer;
  font-weight: bold;
  font-size: 2rem;
  color: #fff;
  display: inline-block;
  -webkit-animation: title 1s infinite alternate;
  -o-animation: title 1s infinite alternate;
  -ms-animation: title 1s infinite alternate;
  -moz-animation: title 1s infinite alternate;
  animation: title 1s infinite alternate;
}

@-webkit-keyframes title {
  0% {
    transform: scale(1)
  }

  100% {
    transform: scale(1.2)
  }
}

@-o-keyframes title {
  0% {
    transform: scale(1)
  }

  100% {
    transform: scale(1.2)
  }
}

@-ms-keyframes title {
  0% {
    transform: scale(1)
  }

  100% {
    transform: scale(1.2)
  }
}

@-moz-keyframes title {
  0% {
    transform: scale(1)
  }

  100% {
    transform: scale(1.2)
  }
}

@keyframes title {
  0% {
    transform: scale(1)
  }

  100% {
    transform: scale(1.2)
  }
}

#main-header {
  position: relative;
  background-color: #5896ec;
  color: #fff;
  font-size: 0.9rem;
  width: 100%;
  height: 300px;
}

#main-header-menu {
  text-align: center;
  padding: 20px 0;
  margin-bottom: 20px;
}

#main-header-menu a {
  color: #fff;
}

#search-area {
  position: absolute;
  width: 100%;
  bottom: 16%;
  left: 50%;
  transform: translateX(-50%);
}

#search-input {
  height: 20px;
  border: none;
  border-radius: 25px 0px 0px 25px;
  outline: none;
  padding: 10px;
}

#search-button {
  cursor: pointer;
  font-weight: bold;
  color: #000;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 0px 25px 25px 0px;
  outline: none;
  margin-left: -8px;
  transition: 1s;
}

#main-footer {
  background-color: #5896ec;
  width: 100%;
  height: 100px;
  margin-top: 200px;
  color: #fff;
  text-align: center;
  padding-top: 80px;
}

</style>
