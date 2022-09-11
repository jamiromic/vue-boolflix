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
    import axios from 'axios';
    import store from '../store';

    export default {
        name: 'MainComponent',
        data() {
            return {
                

            }
        },
        methods: {
            findedMovies() {
                axios.get(`${store.base_url}/search/movie?api_key=${store.api_key}&language=${store.original_language}&query=${store.query}`,{
                })
                .then((res) =>  {
                console.log(res)
                store.movies = res.data.results
                

                })

            },
        },
        computed: {
            searchMovies() {
                return store.movies
            }

        },
        
        created()  {
            this.findedMovies()
        }, 
       
    }
   
</script>

<style lang="scss" scoped>

</style>