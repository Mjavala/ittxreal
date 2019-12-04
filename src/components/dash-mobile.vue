<template>
  <div class="container-nav-mobile text-center hidden-sm-and-up">
    <v-menu top offset-x close-on-click close-on-content-click close-delay >
      <template v-slot:activator="{ on }">
        <v-btn
          color="white"
          class="mobile-menu"
          
          v-on="on"
          depressed
          outlined

        >
         <v-icon color="black">mdi-view-dashboard</v-icon>
        </v-btn>
      </template>

    <v-list width="180">
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click=""
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { title: 'Testimonials' },
        { title: 'Collections' },
        { title: 'About' },
        { title: 'Mission' },
        { title: 'Contact' }
      ],
    }),
  }
</script>

<style>
.container-nav-mobile{
    margin: 2%;
    float: left;
}
.v-list-item__title{
    padding-top: 3%;
    padding-bottom: 3.5%;
    font-size: 100% !important;
    font-family:'Cormorant Garamond', serif;

    border-bottom: 1px solid #020200;
}
</style>