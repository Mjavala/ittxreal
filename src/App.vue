<template>
  <v-app >
    <v-content>
      <navbar />
      <particles />
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import particles from "@/components/particles"

export default {
  name: 'App',
  components: { navbar: () => import("@/components/navbar") ,  
                particles }
};
</script>
