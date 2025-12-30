<script setup>
import { ref } from 'vue';
import { useFetch } from '@/composable/useFetch.js';
import PokemonCard from '@/component/PokemonCard.vue';
import { RouterLink, RouterView } from 'vue-router';

const url = ref(`http://localhost:3000/pokemon`);

const { data, error, loading, fetchData } = useFetch(url);

function deletePokemon(id) {
  fetch(`http://localhost:3000/pokemon/${id}`, {
    method: 'DELETE',
  }).then(() => {
    fetchData();
  });
}

</script>

<template>
  <h1>Llistat de Pokemons</h1>
  <div>
    <div v-if="loading">Carregant...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <div>
        <RouterLink to="/afegirPokemon">Afegir un Pokemon</RouterLink>
      </div>
      <div v-if="data && data.pokemons">
        <div v-for="pokemon in data.pokemons">
          <PokemonCard :pokemon="pokemon" :key="pokemon.pos" @delete-pokemon="deletepokemon"/>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
</style>