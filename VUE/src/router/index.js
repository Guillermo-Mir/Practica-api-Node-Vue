import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import('@/views/Home.vue')
    },
    {
      path: "/pokemons", 
      name: "Pokemons", 
      component: () => import('@/views/Pokemons.vue')
    },
    {
      path: "/videojocs", 
      name: "Videojocs", 
      component: () => import('@/views/Videojocs.vue')
    },

  ],
})

export default router