<template>
        <ul>
            
            <h1 class="title">
                Series
            </h1>
            <li v-for="serie in searchSeries" :key="serie.id" class="card">
            <h1>{{ serie.name }}</h1>
            <h2>{{ serie.original_name }}</h2>
            <img :src="store.original_language[serie.original_language]" alt="">
            <h2>{{ serie.vote_average }}</h2>
        </li>
       </ul>
</template>

<script>
    import store from '../store';
    export default {
        data() {
            return {
                store: store,

            }
        },
        
        computed: {
        searchSeries() {
            return store.series;
        },
    },
        
    }
</script>

<style lang="scss" scoped>

</style>