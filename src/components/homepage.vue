<template>
  <div>
      <navbar />
      <hamburger />
      <sliderlarge />
      <headline />
  </div>
</template>

<script>
import sliderlarge from '../components/sliderlarge'
import hamburger from '../components/hamburger'
import headline from './headline'

export default {
  name: 'App',
  components: { navbar: () => import("@/components/navbar"),
    sliderlarge,
    hamburger,
    headline
      }
};
</script>