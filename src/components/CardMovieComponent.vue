<template>
        <ul>
            <h1 class="title">
                Movies
            </h1>
            <li v-for="movie in searchMovies" :key="movie.id" class="card">
            <h1>{{ movie.title }}</h1>
            <h2>{{ movie.original_title }}</h2>
            <img src="https://www.viaggiaregratis.eu/wp-content/uploads/2021/12/Bandiera-Italia.webp" alt="">
            <h2>{{ movie.vote_average }}</h2>
        </li>
       </ul>
</template>

<script>
    import store from '../store';
    export default {
        store: '',
    computed: {
        searchMovies() {
            return store.movies;
        },
    },
   methods: {

  
   }
    
}
</script>

<style lang="scss" scoped>

</style>