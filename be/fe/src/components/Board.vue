<template>
    <div>
        Board
        <div v-if='loading'>loding board...</div>
        <div v-else>
            <div>bid: {{ bid }}</div>
            <router-link :to="`/b/${bid}/c/1`">card 1</router-link>
            <router-link :to="`/b/${bid}/c/2`">card 2</router-link>
        </div>
        <hr />
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            bid: 0,
            loading: false
        }
    },
    created() {
        this.fetchData()
        // console.log(this.$route.params.bid);
    },
    methods: {
        fetchData() {
            this.loading = true
            setTimeout(() => {
                this.bid = this.$route.params.bid;
                this.loading = false
            }, 1000)
        }
    }
}
</script>

<style>

</style>
