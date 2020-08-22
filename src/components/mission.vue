<template>
  <div>
      <navbar />
      <hamburger />
      <div id="mission-wrap">
        <div id="image-wrap">
         <v-img contain src="../assets/tree.jpg"></v-img>
        </div>
        <div id="mission-text">
I want my art to be a platform that brings people together and empowers individuals to be the best version of themselves. I think it is important to give back which is why I rotate donating a percentage of my sales to organizations and nonprofit groups that provide empowering and helpful services to our communities. Please follow me on social media to find out what organization we are currently donating to.
    <v-spacer><div id="quote-text">“Love the world as your own self; then you can truly care for all things.” - Lao Tzu</div></v-spacer>
        </div>
        </div>
      </div>
</template>

<script>
import hamburger from '../components/hamburger'

export default {
  name: 'App',
  components: { navbar: () => import("@/components/navbar"),
    hamburger
      }
};
</script>

<style scoped>
    #mission-wrap {
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    #mission-text {
        width: 30%;
        font-family: 'Cormorant Garamond', serif;
        text-align: right;
    }
    #image-wrap{
      width: 30vw;
      margin-bottom: 7.5em;
    }
    #quote-text {
      padding: 2em;
    }
</style>