import Vue from 'vue';

const store = Vue.observable({
    movies: [],
    api_key: '6b971d6adcac1b8db3de46fd02b741a7',
    query: '',
    base_url: 'https://api.themoviedb.org/3',
    original_language: 'it',

})

export default store