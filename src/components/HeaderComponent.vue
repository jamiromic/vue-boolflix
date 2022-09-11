<template>
    <div>
        <header>
            <h1>Boolflix</h1>
            <input v-model="searchFilm" class="input_text" type="text">
            <button @click="inputUser" type="submit">Cerca</button>
        </header>

    </div>
</template>

<script>
    import store from '../store';
    export default {
        name: 'HeaderComponent',
        data() {
            return {
                searchFilm: ''
                

            }   

        },

        methods: {
            inputUser() {
                store.query = this.searchFilm
            },
        },
        computed: {
            SearchInput() {
                return store.query
            }
        }
        
        
        
     
    }
    

</script>

<style lang="scss" scoped>

</style>