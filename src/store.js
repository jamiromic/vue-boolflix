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
        pt: 'https://www.viaggiaregratis.eu/wp-content/uploads/2021/12/Bandiera-Portogallo.webp',
        ja: 'https://www.viaggiaregratis.eu/wp-content/uploads/2021/12/Bandiera-Giappone.webp',
        is: 'https://www.viaggiaregratis.eu/wp-content/uploads/2021/12/Bandiera-Islanda.webp',
        th: 'https://www.viaggiaregratis.eu/wp-content/uploads/2021/12/Bandiera-Thailandia.webp',
        vi: 'https://www.viaggiaregratis.eu/wp-content/uploads/2021/12/Bandiera-Vietnam.webp',
        withoutFlag: 'https://images.emojiterra.com/google/noto-emoji/v2.034/512px/2753.png',


    },
    pathImage: {
        imgUrl: 'https://image.tmdb.org/t/p/',
        imgSize: 'w342',

    },
    overview: 'Non presente',
    

})

export default store