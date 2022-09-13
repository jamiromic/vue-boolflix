<template>
        <ul>
            
            <h1 class="title">
                Series
            </h1>
            <li v-for="serie in searchSeries" :key="serie.id" class="card">
                <img class="card_poster"
                :src="(serie.poster_path === null) ? 'https://w7.pngwing.com/pngs/116/765/png-transparent-clapperboard-computer-icons-film-movie-poster-angle-text-logo-thumbnail.png' : `https://image.tmdb.org/t/p/${store.pathImage.imgSize}${serie.poster_path}`" alt="Image_Series">
                <div class="card_info">
                    <h1 class="card_title">Titolo:  <span>{{ serie.name }}</span></h1>
                    <h2 class="card_orig_title">Titolo originale:   <span>{{ serie.original_name }}</span></h2>
                    <span class="card_lang_orig">Lingua originale:  <img class="flag" 
                    :src="store.original_language[serie.original_language]" alt=""></span>
                    <h2 class="card_vote">Voto:  {{ getVote(serie.vote_average) }}</h2>
                    <span>Overview: <p>{{serie.overview === '' ? store.overview : serie.overview}}</p></span>
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
    .title {
        text-transform: uppercase;
        font-size: 1.75rem;
        color: whitesmoke;
    }

    .card_poster {
        width: 342px;
        height: 530px;
    }

    .card_info {
        display: flex;
        flex-direction: column;
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

</style>