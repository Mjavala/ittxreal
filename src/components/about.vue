<template>
  <div>
      <navbar />
      <hamburger />
      <div id="about-wrap">
        <div id="about-text">
          Hi, I’m Kaytlyn. Born and raised in the epic mountains of Colorado. I grew up inspired by my beautiful natural surroundings, but before I used that inspiration in my art I followed my passion for sports. The sport that truly stole my heart was alpine ski racing. Once I hit highschool I fully devoted myself to skiing six days a week, following the snow around the world, training and racing year round to compete at the highest levels. That sport filled my soul and I loved it. Throughout my skiing career I experienced highs and lows. 

After my tenth surgery I had a serious life decision to make. I chose to change my life direction and in that process I lost my sense of identity and everything I knew. It was a bittersweet life transition that left me feeling empty. However, through my countless injuries I realized that no matter how hard the circumstances are I can overcome them. 

Growing up with my father as an artist I felt a pull to express myself with art. My creative flow slowly began to fill up all my free time and eventually led me to where I am now. My art incorporates natural elements such as: plants, candles, metal, wood, wool, crystals, geodes, and deer hide. The bold simplicity of my designs will compliment your space with impactful geometric beauty. 

Nature is already so elegant, I’m simple here to feature it and spread that good energy. 

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

</style>