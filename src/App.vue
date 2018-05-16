<template>
  <div id="app">
    <div id="main-title">
      <h2>BlockVote</h2>
    </div>
    <router-view @modal="modalOpen"></router-view>
    <modal v-if="show" @close="show = false">
      <div slot="header">{{ modalHeader }}</div>
      <div slot="body">{{ modalBody }}</div>
    </modal>
  </div>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  data() {
    return {
      show: false,
      modalHeader: '',
      modalBody: ''
    }
  },
  components: {
    modal: Modal
  },
  mounted() {
    this.$router.push({name:'Login'})
  },
  methods: {
    modalOpen(args) {
      this.modalHeader = args.header
      this.modalBody = args.body
      this.modalFooter =args.footer
      this.show = true;
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
  background-color: #ccceda;
}

#main-title {
  color: #fff;
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
  -webkit-transition: 1s;
  -o-transition: 1s;
  -ms-transition: 1s;
  -moz-transition: 1s;
  transition: 1s;
}

.button:hover {
  background-color: #516aea;
  color: #fff;
  border: 1px solid #fff;
}

.btn-primary {
  background-color: #fff;
  color: #516aea;
  border: 1px solid #516aea;
}

.title {
  color: #516aea;
  font-weight: bold;
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
