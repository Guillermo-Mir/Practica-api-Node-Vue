<script setup>

import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const nouPokemon = ref({
  name: '',
  type: '',
  generation: 1
})

function createPokemon() {
  fetch('http://localhost:3000/pokemon', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(nouPokemon.value)
  })
  .then(res => {
    if (res.ok) {
      router.push('/')
    } else {
      console.error("Error en el servidor");
    }
  })
}

</script>

<template>
  <div>
    <header>
      <h1>Afegir Nou Pokemon</h1>
    </header>
    <main>
      <form @submit.prevent="createGolejador">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="nouPokemon.name" placeholder="name" required /><br>

        <label for="type">Type:</label>
        <input type="text" id="type" v-model="nouPokemon.type" placeholder="type" required /><br>

        <label for="generation">Generation:</label>
        <input type="number" id="generation" v-model.number="nouPokemon.generation" placeholder="generation" required /><br>

        <button type="submit">Crear Pokemon</button>
      </form>
    </main>
  </div>
</template>

<style scoped>

</style>