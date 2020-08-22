<template>
    <nav>
        <div class="mobile-nav">
            <div>
                <v-btn text class="white--text">
                    <router-link to="/">Home</router-link>
                </v-btn>
                <v-btn text class="white--text">
                    <router-link to="/about">About</router-link>
                </v-btn>
                <v-btn text class="white--text">
                    <router-link to="/mission">Mission</router-link>
                </v-btn>
                <v-btn text class="white--text">
                    <router-link to="/contact">Contact</router-link>
                </v-btn>
            </div>
        </div>
    </nav>
</template>

<style>
    a {
        text-decoration: none;
        color: white;
    }
    .theme--light.v-btn{
        color: white;
    }
@media only screen and (min-device-width : 481px){
    .mobile-nav{
        height: 3em;
        background-color: black;
        position: absolute;
        bottom: 0;
        width: 100%;
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