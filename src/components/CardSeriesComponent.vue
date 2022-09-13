<template>
        <ul class="wrapper">      
            <li v-for="serie in searchSeries" :key="serie.id" class="card">
                <img class="card_poster"
                :src="(serie.poster_path === null) ? 'https://w7.pngwing.com/pngs/116/765/png-transparent-clapperboard-computer-icons-film-movie-poster-angle-text-logo-thumbnail.png' : `https://image.tmdb.org/t/p/${store.pathImage.imgSize}${serie.poster_path}`" alt="Image_Series">
                <div class="card_info">
                    <h1 class="card_title">Titolo:  <span>{{ serie.name }}</span></h1>
                    <h2 class="card_orig_title">Titolo originale:   <span>{{ serie.original_name }}</span></h2>
                    <span class="card_lang_orig">Lingua originale:  <img class="flag" 
                    :src="flagOut(serie.original_language)" alt="Flag Original Language"></span>
                    <ul class="card_vote">
                        <span class="vote">Voto:</span>
                        <li v-for="n in getVote(serie.vote_average)" :key="n">
                            <font-awesome-icon icon="fa-solid fa-star"/>
                        </li>
                        <li v-for="n in (5 - getVote(serie.vote_average))" :key="n + 6">
                            <font-awesome-icon icon="fa-regular fa-star"/>
                        </li>
                    </ul>
                    
                    <span class="overview">Overview: <p>{{serie.overview === '' ? store.overview : serie.overview}}</p></span>
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
        },
        flagOut(input) {
            if (Object.keys(store.original_language).includes(input)) {

                return store.original_language[input]
                
            } else {
                return store.original_language.withoutFlag
            }

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
    

    .wrapper {
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        padding: 1rem;
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
        color: rgb(255, 217, 0);
        display: flex;
        align-items: center;

        .vote {
            color: white;
            font-size: 1.75rem;
            font-weight: bold;
            padding-right: 1rem;
        }
    }

    .overview {
        font-size: 1.75rem;
        font-weight: bold;
        

        p {
            
            font-size: 1.25rem;
            font-weight: 300;
        }
    }

</style>