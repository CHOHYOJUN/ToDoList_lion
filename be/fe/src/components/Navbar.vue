<template>
    <nav>
        <div>
            <router-link to="/">Home</router-link>
        </div>
        <div>
            <router-link to="signup">SignUp</router-link>
        </div>
        <div>
           <!-- <a href="" v-if="isAuth">Logout</a> -->
           <router-link to="logout">Logout</router-link>
           <router-link to="/login">Login</router-link>
           <!-- <router-link v-else to="/login">Login</router-link> -->
        </div>
    </nav>
</template>

<script>
import firebase from 'firebase'
export default {
    computed: {
        isAuth(){
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    console.log('인증성공');
                    // User is signed in.
                    // var displayName = user.displayName;
                    // var email = user.email;
                    // var emailVerified = user.emailVerified;
                    // var photoURL = user.photoURL;
                    // var isAnonymous = user.isAnonymous;
                    // var uid = user.uid;
                    // var providerData = user.providerData;
                    // ...
                } else {
                    console.log('인증실패');
                    // User is signed out.
                    // ...
                }
            })
        }
    }
}
</script>

<style>

</style>
