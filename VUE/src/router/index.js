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
      path: "/editarPokemon/:id", 
      name: "editarPokemon", 
      component: () => import('@/views/editarPokemon.vue')
    },
    {
      path: "/afegirPokemon/", 
      name: "afegirPokemon", 
      component: () => import('@/views/afegirPokemon.vue')
    },

  ],
})

export default router