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
  fetch('http://localhost:3000/pokemons', {
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
  <div class="page-container">
    <header class="main-header">
      <h1>Gestió de Pokemons</h1>
      <RouterLink to="/" class="home-link">Home</RouterLink>
    </header>

    <main class="content">
      <div class="form-card">
        <h2>Afegir Nou Pokemon</h2>
        <form @submit.prevent="createPokemon" class="custom-form">
          <div class="input-group">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="nouPokemon.name" required />
          </div>

          <div class="input-group">
            <label for="type">Type:</label>
            <input type="text" id="type" v-model="nouPokemon.type" required />
          </div>

          <div class="input-group">
            <label for="generation">Generation:</label>
            <input type="number" id="generation" v-model.number="nouPokemon.generation" required />
          </div>

          <button type="submit" class="btn-submit">Crear Pokemon</button>
        </form>
      </div>
    </main>
  </div>
</template>

<style scoped>
/* Reutilizamos los estilos base de la cabecera */
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

/* Estilo de la Tarjeta del Formulario */
.form-card {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
  width: 100%;
  max-width: 400px;
}

h2 {
  color: #444;
  margin-bottom: 25px;
  font-size: 1.5rem;
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
  font-size: 0.9rem;
}

input {
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
}

input:focus {
  outline: none;
  border-color: #4facfe;
  box-shadow: 0 0 0 2px rgba(79, 172, 254, 0.2);
}

.btn-submit {
  background: #4facfe;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
  margin-top: 10px;
}

.btn-submit:hover {
  background: #00c6ff;
}
</style>