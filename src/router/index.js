import Vue from 'vue'
import Router from 'vue-router'

import Login from '../components/LoginPanel.vue'
import Signup from '../components/SignupPanel.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }
  ]
})
