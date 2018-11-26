import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'

import Login from '../components/Login.vue'
import Board from '../components/Board.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      // name: 'home',
      component: Home
    },
    {
      path: '/login',
      // name: 'login',
      component: Login
    },
    {
      path: '/b/:bid', // : 콜론이 있을경우 뒤의 bid 변수로 받을 수 있음
      component: Board
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
