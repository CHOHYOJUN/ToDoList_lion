<template>
  <v-app>
    여기서부터 코드 시작
    <!-- 라우팅에 따라 컴포넌트가 대체 되는 부분 -->
      <router-view></router-view> 
  </v-app>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      //
    }
  }
}
</script>
