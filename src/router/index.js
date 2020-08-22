import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/homepage.vue'
import About from '../components/about.vue'
import Mission from '../components/mission.vue'
import Contact from '../components/contact.vue'



Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/mission',
    name: 'Mission',
    component: Mission
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = new VueRouter({
  routes
})

export default router
