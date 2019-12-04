<template>
    <nav>
    <v-app-bar app bottom elevation="0" color="#020200" class="mobile-nav">
        <v-btn text class="white--text">Testimonials</v-btn>
        <v-btn text class="white--text">Collections</v-btn>
        <v-btn text class="white--text">About</v-btn>
        <v-btn text class="white--text">Mission</v-btn>
        <v-btn text class="white--text">Contact</v-btn>
    </v-app-bar>
    </nav>
</template>

<style>
@media only screen and (min-device-width : 481px){
    .mobile-nav{
        display: flex;
        justify-content: space-around;
    }
}
@media only screen and (min-device-width : 320px) and (max-device-width : 480px){
    .mobile-nav{
        overflow: scroll;
        -webkit-overflow-scrolling: touch;
    }
}
</style>