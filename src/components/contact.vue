<template>
  <div>
      <navbar />
      <hamburger />
      <div id="contact-wrap">
        <div class="contact-text hello">
            Let's Create Something REAL
        </div>
        <div class="contact-text">
            Kaytlyn Samuelson
        </div>
        <div class="contact-text">
            @Ittx_real
        </div>
        <div class="contact-text">
            samuelson.kaytlyn@gmail.com
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
    #contact-wrap {
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-size: 1.5em;
    }
    .contact-text {
      display: block;
      font-family: 'Poiret One', cursive;
    }
    .hello {
      font-size: 2.25em;
      margin: 1em;
    }

</style>