<template>
  <div id="app">
    <div id="main-title" v-if="!login">
      <h2>BlockVote</h2>
    </div>
    <router-view @modal="modalOpen" @onLogin="onLogin"></router-view>
    <transition name="fade" mode="out-in">
      <modal v-if="show" @close="show = false">
        <div slot="header">{{ modalHeader }}</div>
        <div slot="body">{{ modalBody }}</div>
      </modal>
    </transition>
  </div>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  data () {
    return {
      show: false,
      modalHeader: '',
      modalBody: '',
      login: false
    }
  },
  components: {
    modal: Modal
  },
  mounted () {
    // 세션 체크 후 화면 전환
    this.$router.push({name: 'Login'})
    // this.$router.push({name: 'Main'})
  },
  methods: {
    modalOpen (args) {
      this.modalHeader = args.header
      this.modalBody = args.body
      this.modalFooter = args.footer
      this.show = true
    },
    onLogin () {
      this.login = true
      this.$router.push({name: 'Main'})
    }
  }
}
</script>

<style>

html, body, #app {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

a {
  color: gray;
  font-size: 0.85rem;
}

#app {
  text-align: center;
  background-color: #f2f2f2;
}

#main-title {
  color: #5896ec;
  font-weight: bold;
  font-size: 1.2rem;
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
}

.button {
  cursor: pointer;
  border-radius: 4px;
  margin: 5px;
  padding: 2px 15px;
  font-size: 1.1rem;
  font-weight: bold;
}

.btn-primary:hover {
  background-color: #5896ec;
  color: #fff;
  border: 1px solid #fff;
  -webkit-transition: 1s;
  -o-transition: 1s;
  -ms-transition: 1s;
  -moz-transition: 1s;
  transition: 1s;
}

.btn-primary {
  background-color: #fff;
  color: #5896ec;
  border: 1px solid #5896ec;
}

.title {
  font-weight: bold;
  background-color: #5896ec;
  color: #fff;
  margin: 0;
  padding: 10px;
}

.input {
  outline: none;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  padding: 10px;
  background-color: #fff;
}

*:focus {
  outline: none;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
