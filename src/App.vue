<template>
  <div id="app">
    <HeaderComponent/>
    <CardMovieComponent/>
    <CardSeriesComponent/>
    
    
  </div>
</template>

<script>
  import HeaderComponent from './components/HeaderComponent.vue';
  import CardMovieComponent from './components/CardMovieComponent.vue';
  import CardSeriesComponent from './components/CardSeriesComponent.vue';



export default {
  name: 'App',
  components: {
    HeaderComponent,
    CardMovieComponent,
    CardSeriesComponent
},
  
}

</script>


<style lang="scss">
  @import './styles/index.scss';
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

</style>
