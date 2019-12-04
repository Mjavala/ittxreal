<template>
  <v-carousel touch :show-arrows="false" cycle class="carousel hidden-xs-only" hide-delimiter-background hide-delimiters>
    <v-carousel-item contain
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      class="image"
      max-width="500"

    ></v-carousel-item>
  </v-carousel>
</template>


<script>
  export default {
    data () {
      return {
        items: [
          {
            src: require('../assets/logo2.png'),
          },
          {
            src: require('../assets/kayt1.jpg'),
          },
          {
            src: require('../assets/kayt2.jpg'),
          },
          {
            src: require('../assets/kayt3.jpg'),
          },
          {
            src: require('../assets/kayt4.jpg'),
          },
          {
            src: require('../assets/kayt5.jpg'),
          },
          {
            src: require('../assets/kayt6.jpg'),
          }
        ],
      }
    },
  }
</script>

<style>
.carousel{
  margin-top: 5%;
  max-width: 100%;
  max-height: 150%;
}
.v-window__container{
  display: flex;
  justify-content: center;
}
</style>