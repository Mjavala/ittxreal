<template>
  <div>
      <navbar />
      <hamburger />
      <div id="mission-wrap">
        <div id="image-wrap">
         <v-img contain src="../assets/tree.jpg"></v-img>
        </div>
        <div id="mission-text">
I want my art to be a platform that brings people together and empowers a community of love, support and acceptance. Love, for the beautiful natural world we all live in. Support, for my fellow humans who are out there living their truth and trying their best. Acceptance, amongst all the differences, for our differences make the world so flavorful. 

After experiencing the depth of mental health issues in our communities and in our families, my heart ached to better understand and help. My mission is to donate 5% of all my art proceeds to the Gallatin Mental Health Center to support the amazing resources they provide for my local community.

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

</style>