<template>
  <v-card flat class="hidden-xs-only" >
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      class="dashboard"
      height="360"
      width="250"
      
      overlay-opacity="0"
    >
      <v-list-item class="dashboard-icon-item">

        <v-btn
          icon
          @click.stop="mini = !mini"
          class="dashboard-icon"
        >
          <img :src="require('../assets/view-dashboard.png')">
        </v-btn>
      </v-list-item>

      <v-list nav>
        <v-list-item
          v-for=" (item, i) in items"
          :key="i"
        >
          <v-list-item-title>{{ item.title}} </v-list-item-title>
           </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>

  export default {
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Testimonials'},
          { title: 'Collections'},
          { title: 'About'},
          { title: 'Mission'},
          { title: 'Contact'},
        ],
        mini: true,
      }
    },
  }
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Cairo|Cormorant+Garamond|Exo+2|Rokkitt&display=swap');


.dashboard{
    position: absolute;
    margin-left: .1%;
    margin-top: .1%;
    z-index: 100;
}

@keyframes shadow-pulse
{
  0% {
    box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.3);
  }
  100% {
    box-shadow: 0 0 0 15px rgba(0, 0, 0, 0);
  }
}

.dashboard-icon{
    margin-top: 20%;
    animation: shadow-pulse 3s infinite;
    background: #020200 !important;
}

.v-list-item__title{
    margin: 1%;
    padding-top: 3%;
    padding-bottom: 3.5%;
    font-family:'Cormorant Garamond', serif;
    font-size: 130% !important;
    border-bottom: 1px solid #020200;
}

</style>

