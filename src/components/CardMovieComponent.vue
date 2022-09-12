<template>
        <ul>
            <h1 class="title">
                Movies
            </h1>
            <li v-for="movie in searchMovies" :key="movie.id" class="card">
            <h1>{{ movie.title }}</h1>
            <h2>{{ movie.original_title }}</h2>
            <img :src="store.original_language[movie.original_language]" alt="">
            <h2>{{ movie.vote_average }}</h2>
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
    
}
</script>

<style lang="scss" scoped>

</style>