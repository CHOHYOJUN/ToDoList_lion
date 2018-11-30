<template>
    <div>
        Home
        <div>
            Board List:
            <!-- 로딩중일때 -->
            <div v-if="loading">Loading...</div> 

            <!-- firebase 데이터 있을 경우 -->
            <div v-else>  Api result:
                <pre>{{ userStats }}</pre>
                <!-- <pre>{{ error }}</pre> -->

                <div v-for="b in boards" :key="b.id">
                    {{ b }}
                </div>
            </div>
            <ul>
                <li>
                    <router-link  to="/b/1">Board 1</router-link>
                </li>
                <li>
                    <router-link  to="/b/2">Board 2</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { board } from '../api' // axios api로 정리해서 사용
import firebase from 'firebase'
// const db = firebase.database()
// const dbRefObject = db.ref().child('object');

// 로그인 성공하면 db에서 보드 리스트 가져와서 뿌려야함

export default {
    data() {
        return{
            loading: true,
            userStats: '',
            boards: []
        }
    },
    created() {
        this.fetchData()
        
    },
    methods: {
        fetchData(){
           var user = firebase.auth().currentUser; //사용자 체크하기
            if (user) {
                 this.loading = false
                  console.log('user true');
                // User is signed in.
                var displayName = user.displayName;
                var email = user.email;
                // var emailVerified = user.emailVerified;
                // var photoURL = user.photoURL;
                // var isAnonymous = user.isAnonymous;
                // var uid = user.uid;
                // var providerData = user.providerData;
                // ...
                console.log(displayName);
                this.userStats = displayName;
                console.log(this.boards);
               
            } else {
                  this.loading = false
                  alert('로그인 페이지로 이동합니다.');
                this.$router.replace('/login')
                this.userStats = 'error !.!';
                // User is signed out.
                // ...
            }//if
        }//fetchData

     
    }
}
</script>

<style>

</style>
