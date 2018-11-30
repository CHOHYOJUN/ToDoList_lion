<template>
  <div class="hello">
    <h4>아이디</h4>
    <input v-model="email" type="text" />
    <h4>패스워드</h4>
    <input v-model="password" type="password" />
    <div>
      <button @click="SignUp()">가입하기</button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import axios from 'axios'

export default {
    data (){
        return {
            msg: 'Login Page!.!',
            email:'',
            password: ''
        }
    },
    methods: {
        SignUp (){
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then((user) => {
                console.log(user.data);
                alert('가입 성공');
               $router.get('/');

            }).catch((error) => {
                console.log(error.code);
                console.log(error.message);
                   alert('가입 실패');
            })
            // 성공시 페이지 이동 필요
            // console.log('email: ', this.email)
            // console.log('password: ', this.password)
        }
    }
}
</script>

<style>

</style>
