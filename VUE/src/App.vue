<script setup>
import Home from './views/Home.vue';
import Pokemons from './views/Pokemons.vue'


</script>

<template>
  <h1>ProductList</h1>
  <div>
    <nav>
      <RouterLink to="/">Home</RouterLink><br>
      <RouterLink to="/pokemons">Pokemons</RouterLink><br>
      <RouterLink to="/videojocs">Videojocs</RouterLink>
    </nav>
    <RouterView/>
    <hr />
  </div>
  
</template>

<style scoped></style>