<template>
        <ul>
            <h1 class="title">
                Movies
            </h1>
            <li v-for="movie in searchMovies" :key="movie.id" class="card">
                <img :src=" (movie.poster_path === null) ? 'https://w7.pngwing.com/pngs/116/765/png-transparent-clapperboard-computer-icons-film-movie-poster-angle-text-logo-thumbnail.png' : `https://image.tmdb.org/t/p/${store.pathImage.imgSize}${movie.poster_path}`" alt="Image Movies">
                <h1>{{ movie.title }}</h1>
                <h2>{{ movie.original_title }}</h2>
                <img :src="store.original_language[movie.original_language]" alt="">
                <h2>{{ getVote(movie.vote_average) }}</h2>
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
        searchMovies() {
            return store.movies;
        },
    },
    methods: {
        getVote(data) {
            return Math.round(data / 2)
        }
    }
    
}
</script>

<style lang="scss" scoped>

</style>