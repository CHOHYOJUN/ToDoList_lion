import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import firebase from 'firebase'

Vue.config.productionTip = false

const config = {
  apiKey: 'AIzaSyDkO2nizroBFfHT5q6cLZkHWBDQUwaxidA',
  authDomain: 'todoapp-b5a97.firebaseapp.com',
  databaseURL: 'https://todoapp-b5a97.firebaseio.com',
  projectId: 'todoapp-b5a97',
  storageBucket: 'todoapp-b5a97.appspot.com',
  messagingSenderId: '423331120993'
}

// const firebaseApp = firebase.initializeApp(config)
const db = firebase.initializeApp(config)

new Vue({
  router,
  store,
  db,
  render: h => h(App)
}).$mount('#app')
