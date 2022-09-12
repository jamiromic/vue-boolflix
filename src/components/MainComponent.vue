<template>
    <div>
       <ul>
        <li v-for="movie in searchMovies" :key="movie.id" class="card_movies">
            <h1>{{ movie.title }}</h1>
            <h2>{{ movie.original_title }}</h2>
            <h2>{{ movie.original_language }}</h2>
            <h2>{{ movie.vote_average }}</h2>
        </li>
       </ul>

    </div>
</template>

<script>
    
    import store from '../store';

    export default {
        name: 'MainComponent',
        data() {
            return {

            }
        },
        
        computed: {
            searchMovies() {
                return store.movies
            },
               

        },
        
       
    }
   
</script>

<style lang="scss" scoped>

</style>