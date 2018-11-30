<template>
    <div >
        <h4>아이디</h4>
            <input v-model="email" type="text" />
        <h4>패스워드</h4>
            <input v-model="password" type="password" />
        <div>
           <button @click="loginReq()">로그인 버튼</button>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    created() {
        
    },
    methods: {
        async loginReq() {
            // vue-router에 네비게이션 가드란게 있음

            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(this.$router.replace('/'))
            .catch(function(error) {
                // Handle Errors here.
                // var errorCode = error.code;
                // var errorMessage = error.message;
             
                var errorCode = error.code;
                var errorMessage = error.message;

                console.log("errorCode: " + errorCode);
                console.log("errorMessage: " + errorMessage);

                // [START_EXCLUDE]
                if (errorCode === 'auth/wrong-password') {
                    alert('등록된 비밀번호와 다릅니다.');

                } else {
                    
                    alert(errorMessage);
                }
                console.log(error);
            })
        }
    }
}
</script>

<style>

</style>
