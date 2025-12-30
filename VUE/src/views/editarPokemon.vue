<script setup>

import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const nouPokemon = ref({
  name: '',
  type: '',
  generation: 1
})

onMounted(() => {
  fetch(`http://localhost:3000/pokemon/${route.params.id}`, { credentials: 'include' })
    .then(res => res.json())
    .then(data => {
      if (data.pokemon) pokemon.value = data.pokemon
    })
})

function updatePokemon() {
  fetch(`http://localhost:3000/pokemon/${route.params.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(pokemon.value)
  })
  .then(res => {
    if (res.ok) router.push('/')
  })
}

</script>

<template>
  <div>
    <header>
      <h1>Editar Pokemon: {{ pokemon.name }}</h1>
    </header>
    <main>
      <form @submit.prevent="updatePokemon">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="pokemon.name" required /><br>

        <label for="type">Type:</label>
        <input type="text" id="type" v-model="pokemon.type" required /><br>

        <label for="generation">Generation:</label>
        <input type="number" id="generation" v-model.number="pokemon.generation" required /><br>

        <button type="submit">Desa</button>
      </form>
    </main>
  </div>
</template>

<style scoped>

</style>