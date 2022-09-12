<template>
        <ul>
            
            <h1 class="title">
                Series
            </h1>
            <li v-for="serie in searchSeries" :key="serie.id" class="card">
                <img :src="(serie.poster_path === null) ? 'https://w7.pngwing.com/pngs/116/765/png-transparent-clapperboard-computer-icons-film-movie-poster-angle-text-logo-thumbnail.png' : `https://image.tmdb.org/t/p/${store.pathImage.imgSize}${serie.poster_path}`" alt="Image_Series">
                <h1>{{ serie.name }}</h1>
                <h2>{{ serie.original_name }}</h2>
                <img :src="store.original_language[serie.original_language]" alt="">
                <h2>{{ getVote(serie.vote_average) }}</h2>
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
        methods: {
        getVote(data) {
            return Math.round(data / 2)
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