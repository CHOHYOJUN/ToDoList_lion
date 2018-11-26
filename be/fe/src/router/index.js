import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'

import Login from '../components/Login.vue'
import Board from '../components/Board.vue'
import Card from '../components/Card.vue'

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
      component: Board, children: [
         //board 컴포넌트 하위화면에 children 화면이 출력되는 것을 의미한다. board컴포넌트에서 하위 컴포넌트를 지정해줘야한다.
        { 
          path: 'c/:cid',
          component: Card
        } 
      ]
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
