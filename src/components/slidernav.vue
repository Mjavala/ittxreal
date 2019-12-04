<template>
  <v-carousel touch :show-arrows="false" cycle class="carousel-mobile hidden-sm-and-up" hide-delimiter-background hide-delimiters>
    <v-carousel-item contain
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      class="image"
      max-width="375"
      max-height="375"
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
.carousel-mobile{
  margin-top: 25% !important;
}
</style>