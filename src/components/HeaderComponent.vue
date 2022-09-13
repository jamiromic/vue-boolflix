<template>
    <header>
        <h1>Boolflix</h1>
        <div class="wrapper_input_box">
            <input v-model="searchFilm" class="input_text" type="text" placeholder="Cerca il tuo film/serie">
            <button @click="inputUserMovies" type="submit" >Cerca</button>
        </div>
    </header>

    
</template>

<script>
    import store from '../store';
    import axios from 'axios';
    export default {
        name: 'HeaderComponent',
        data() {
            return {
                searchFilm: store.query
                

            }   

        },

        methods: {
            inputUserMovies() {
                store.query = this.searchFilm
                if (store.query.trim() === '') {

                    alert('Inserisci un valore valido')   
                    
                } else {
                    axios.all([
                    axios.get(`${store.base_url}/search/movie`,{
                        params: {
                            api_key: store.api_key,
                            query: store.query
                        }
                        
                    }),
                    axios.get(`${store.base_url}/search/tv`,{
                        params: {
                            api_key: store.api_key,
                            query: store.query
                        }
                        
                    }),


                    ])
                    .then(axios.spread((res,res1) =>  {
                    console.log(res,res1)
                    store.movies = res.data.results,
                    store.series = res1.data.results
                    
                    }))
                    
                }
                
                
                
                
            },
        },
         
     
    }
    

</script>

<style lang="scss" scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2rem 3rem;

        h1 {
            text-transform: uppercase;
            color: red;
            font-size: 1.5rem;
        }

        button {
            margin-left: 0.35rem;
            padding: 0.25rem 0.5rem;
            border-radius: 5px;
        }

        input {
            padding: 0.20rem 0;
        }
    }

</style>