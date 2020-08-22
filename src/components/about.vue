<template>
  <div>
      <navbar />
      <hamburger />
      <div id="about-wrap">
        <div id="about-text">
Hey! My name is Kaytlyn, the artist behind ITtx REAL. I’m drawn to highlighting nature's beauty. I believe that nature is already so elegant and I am simply here to feature it and spread that good energy. My work incorporates natural elements such as: plants, candles, metal, wood, wool, crystals, geodes, deer hide and more. I hope you enjoy it!
        <v-spacer><div id="quote-text">“ITtx Bold, ITtx Timeless, ITtx Real”</div></v-spacer>
        </div>
        <div id="image-wrap">
         <v-img contain src="../assets/kayt10.jpg"></v-img>
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
    #about-wrap {
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

    }
    #about-text {
        width: 30%;
        font-family: 'Cormorant Garamond', serif;
    }
    #image-wrap{
      width: 30vw;
      margin-bottom: 7.5em;
    }
    #quote-text {
      padding: 2em;
    }
</style>