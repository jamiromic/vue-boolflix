<template>
        <ul>
            <h1 class="title">
                Movies
            </h1>
            <li v-for="movie in searchMovies" :key="movie.id" class="card">
                <img class="card_poster" 
                :src=" (movie.poster_path === null) ? 'https://w7.pngwing.com/pngs/116/765/png-transparent-clapperboard-computer-icons-film-movie-poster-angle-text-logo-thumbnail.png' : `https://image.tmdb.org/t/p/${store.pathImage.imgSize}${movie.poster_path}`" alt="Image Movies">
                <div class="card_info">
                    <h1 class="card_title">Titolo:  <span>{{ movie.title }}</span></h1>
                    <h2 class="card_orig_title">Titolo originale:   <span>{{ movie.original_title }}</span></h2>
                    <span class="card_lang_orig">Lingua originale:  <img class="flag" 
                    :src="store.original_language[movie.original_language]" alt=""></span>
                    <h2 class="card_vote">Voto:  {{ getVote(movie.vote_average) }}</h2>
                    <span class="overview">Overview: <p>{{movie.overview}}</p></span>
                </div>
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
    .title {
        color: whitesmoke;
        text-transform: uppercase;
        font-size: 1.75rem;
    }

    .card_poster {
        width: 342px;
        height: 530px;
        overflow: hidden;
        position: absolute;
        
    }

   
    .card_info {
        width: 342px;
        height: 530px;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        position: relative;
        opacity: 0;
        padding: 1.25rem;
        
    }

    .card_info:hover {
        background-color: black;
        opacity: 100%;
    }

   
    

    .card_title {
        font-size: 1.75rem;

        span {
            font-size: 1.50rem;
            font-weight: 300;
        }

    }

    .card_orig_title {
        font-size: 1.75rem;

        span {
            font-size: 1.50rem;
            font-weight: 300;
        }

    }

    .card_lang_orig {
        font-size: 1.75rem;
        font-weight: bold;
    }

    .flag {
        width: 35px;
    }

    .card_vote {
        font-size: 1.75rem;
    }

    .overview {
        font-size: 1.75rem;
        font-weight: bold;

        p {
            display: inline;
            font-size: 1.25rem;
            font-weight: 300;
        }
    }

</style>