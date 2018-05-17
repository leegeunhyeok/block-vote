import Vue from 'vue'
import Router from 'vue-router'

import Main from '../components/Main.vue'
import MainMenu from '../components/MainMenu.vue'
import MainCreate from '../components/CreateVote.vue'
import MainHistory from '../components/HistoryVote.vue'
import Login from '../components/LoginPanel.vue'
import Signup from '../components/SignupPanel.vue'
import Mypage from '../components/MyPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '',
          name: 'Home',
          component: MainMenu
        },
        {
          path: 'create',
          name: 'Create',
          component: MainCreate
        },
        {
          path: 'history',
          name: 'History',
          component: MainHistory
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/my',
      name: 'Mypage',
      component: Mypage
    }
  ],
  mode: 'history'
})
