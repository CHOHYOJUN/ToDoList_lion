import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import SignUp from '../components/SignUp.vue'
import Board from '../components/Board.vue'
import Card from '../components/Card.vue'
import Home from '../components/Home.vue'
import NotFound from '../components/NotFound.vue'

Vue.use(Router)

  //로컬 스토리지에 토큰이 있는지 여부 확인 
// const requireAuth = (to, from, next) => {
//   const isAuth = localStorage.getItem('token')
//   const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`
//   isAuth ? next() : next(loginPath)
// }

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home, 
      // beforeEnter: requireAuth
    },
    {
      path: '/signup',
      component: SignUp
    },
    {
      path: '/login',
      // name: 'login',
      component: Login
    },
    {
      path: '/b/:bid', // : 콜론이 있을경우 뒤의 bid 변수로 받을 수 있음
      component: Board, children: [
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
