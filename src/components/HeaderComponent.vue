<template>
    <div>
        <header>
            <h1>Boolflix</h1>
            <input v-model="searchFilm" class="input_text" type="text" placeholder="Cerca il tuo film/serie">
            <button @click="inputUser" type="submit" >Cerca</button>
        </header>

    </div>
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
            inputUser() {
                store.query = this.searchFilm
                if (store.query.trim() === '') {

                    alert('Inserisci un valore valido')

                    
                    
                } else {

                    
                
                    axios.get(`${store.base_url}/search/movie?api_key=${store.api_key}&language=${store.original_language}&query=${store.query}`,{
                    })
                    .then((res) =>  {
                    console.log(res)
                    store.movies = res.data.results
                

                    })
                    
                }
                
                
                
                
            },
        },
         
     
    }
    

</script>

<style lang="scss" scoped>

</style>