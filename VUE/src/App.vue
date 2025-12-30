<script setup>
import Home from './views/Home.vue';
import Pokemons from './views/editarPokemon.vue'


</script>

<template>
  <div>
    <nav>
      <RouterLink to="/"></RouterLink><br>
    </nav>
    <RouterView/>
    <hr />
  </div>
  
</template>

<style scoped></style>