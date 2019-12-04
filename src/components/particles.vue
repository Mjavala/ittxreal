<template>
    <v-app>
  <div class="particles">
    <div id="particles-js">
         <hamburger />
         <dashMobile />

 </div>
</div>
    <sliderlarge />
    <slidernav />
    <headline />
      
  </v-app>
</template>

<script>
import 'particles.js'
import dashMobile from "@/components/dash-mobile"

export default {
  name: "particles",
  components: { sliderlarge: () => import("@/components/sliderlarge"),
                slidernav: () => import("@/components/slidernav"),
                hamburger: () => import("@/components/hamburger"), 
                headline: () => import("@/components/headline"), 
                dashMobile,
    },
  mounted() {
    this.initParticles()
  },
  methods: {
    initParticles() {
      window.particlesJS("particles-js", {
                "particles": {
                    "number": {
                        "value": 28,
                        "density": {
                            "enable": true,
                            "value_area": 2026
                        }
                    },
                    "color": {
                        "value": "#000000"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        },
                        "polygon": {
                            "nb_sides": 5
                        },
                    },
                    "opacity": {
                        "value": 1,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#000000",
                        "opacity": 0.4,
                        "width": 1.5
                    },
                    "move": {
                        "enable": true,
                        "speed": 6,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                                "enable": true,
                                "mode": "repulse"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 140,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true
            })
    }
  }
};
</script>

<style>
#particles-js {
  background: rgb(255, 255, 255);
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
