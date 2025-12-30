<script setup>

import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const pokemon = ref({
  name: '',
  type: '',
  generation: 1
})

onMounted(() => {
  fetch(`http://localhost:3000/pokemons/${route.params.id}`, { credentials: 'include' })
    .then(res => res.json())
    .then(data => {
      if (data.pokemon) pokemon.value = data.pokemon
    })
})

function updatePokemon() {
  fetch(`http://localhost:3000/pokemons/${route.params.id}`, {
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
  <div class="page-container">
    <header class="main-header">
      <h1>Gestió de Pokemons</h1>
      <RouterLink to="/" class="home-link">Home</RouterLink>
    </header>

    <main class="content">
      <div class="form-card">
        <h2>Editar Pokemon: <span class="highlight">{{ pokemon.name }}</span></h2>
        
        <form @submit.prevent="updatePokemon" class="custom-form">
          <div class="input-group">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="pokemon.name" required />
          </div>

          <div class="input-group">
            <label for="type">Type:</label>
            <input type="text" id="type" v-model="pokemon.type" required />
          </div>

          <div class="input-group">
            <label for="generation">Generation:</label>
            <input type="number" id="generation" v-model.number="pokemon.generation" required />
          </div>

          <button type="submit" class="btn-submit">Desar Canvis</button>
        </form>
      </div>
    </main>
  </div>
</template>

<style scoped>
/* Copiamos los mismos estilos que en Afegir para mantener consistencia */
.page-container {
  font-family: 'Segoe UI', sans-serif;
  background-color: #f8f9fa;
  min-height: 100vh;
}

.main-header {
  background: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
  color: white;
  padding: 40px 20px;
  text-align: center;
  border-radius: 0 0 20px 20px;
}

.home-link {
  color: white;
  margin-top: 10px;
  display: inline-block;
}

.content {
  display: flex;
  justify-content: center;
  padding: 40px 20px;
}

.form-card {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
  width: 100%;
  max-width: 400px;
}

.highlight {
  color: #4facfe;
}

.custom-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

label {
  font-weight: bold;
  color: #666;
}

input {
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.btn-submit {
  background: #4facfe;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
}

.btn-submit:hover {
  background: #00c6ff;
}
</style>