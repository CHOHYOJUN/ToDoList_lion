<template>
    <div>
        Board
        <div>bid: {{ bid }}</div>
        <router-link :to="`/b/${bid}/c/1`">card 1</router-link>
        <router-link :to="`/b/${bid}/c/2`">card 2</router-link>
        <hr />
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data(){
        return {
            bid: 0
        }
    },
    created(){
        // console.log(this.$route.params.bid);
        this.bid = this.$route.params.bid;
    }
}
</script>

<style>

</style>
