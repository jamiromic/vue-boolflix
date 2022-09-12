import Vue from 'vue';

const store = Vue.observable({
    movies: [],
    series: [],
    api_key: '6b971d6adcac1b8db3de46fd02b741a7',
    query: '',
    base_url: 'https://api.themoviedb.org/3',
    original_language: {
        it: 'https://www.viaggiaregratis.eu/wp-content/uploads/2021/12/Bandiera-Italia.webp',
        en: 'https://www.viaggiaregratis.eu/wp-content/uploads/2021/12/Bandiera-Regno-Unito.webp',
        us: 'https://www.viaggiaregratis.eu/wp-content/uploads/2021/12/Bandiera-Stati-Uniti.webp',
        fr: 'https://www.viaggiaregratis.eu/wp-content/uploads/2021/12/Bandiera-Francia.webp',
        es: 'https://www.viaggiaregratis.eu/wp-content/uploads/2021/12/Bandiera-Spagna.webp',

    },
    pathImage: {
        imgUrl: 'https://image.tmdb.org/t/p/',
        imgSize: 'w342',

    },
    

})

export default store