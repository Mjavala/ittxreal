<template>
  <v-card flat class="hidden-xs-only" >
    <v-navigation-drawer
      v-model="drawer"
      floating
      :mini-variant.sync="mini"
      class="dashboard"
      height="400"
      width="250"
      
      overlay-opacity="0"
    >
      <v-list-item class="dashboard-icon-item">

        <v-btn
          icon
          @click="dashNav"
          class="dashboard-icon"
        >
          <img :src="require('../assets/view-dashboard.png')">
        </v-btn>
      </v-list-item>

      <v-list v-if="clicked" nav>
        <v-list-item
          v-for=" (item, i) in items"
          :key="i"
          :to="item.href"
        >
          <v-list-item-title class="title">{{ item.title}} </v-list-item-title>
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
          { title: 'Home', href: "/"},
          { title: 'About', href: "/about"},
          { title: 'Mission', href: "/mission"},
          { title: 'Contact', href: "/contact"},
        ],
        mini: true,
        clicked: false
      }
    },
    methods: {
      dashNav () {
        this.mini = !this.mini
        this.clicked = !this.clicked
      }
    }
  }
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Economica&display=swap');


.dashboard{
    position: absolute;
    margin-left: .1%;
    margin-top: .1%;
    z-index: 100;
    overflow-y: hidden;
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

