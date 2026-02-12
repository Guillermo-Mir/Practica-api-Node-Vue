<script setup>
import { ref, onMounted } from 'vue';
import { useFetch } from '@/composable/useFetch.js';
import PokemonCard from '@/component/PokemonCard.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const url = ref(`http://localhost:3000/pokemons`);
const { data, error, loading, fetchData } = useFetch(url);

// Función para eliminar un Pokemon
function deletePokemon(id) {
  fetch(`http://localhost:3000/pokemons/${id}`, {
    method: 'DELETE',
  }).then(() => {
    fetchData(); // recarga la lista
  });
}

// Logout
async function logout() {
  await fetch('http://localhost:3000/logout', {
    method: 'POST',
    credentials: 'include'
  });
  router.push('/login');
}

// Para cargar datos inicialmente
onMounted(fetchData);
</script>

<template>
  <div class="container">
    <header class="main-header">
      <h1>Llistat de Pokemons</h1>
      <RouterLink to="/afegirPokemon" class="home-link">Afegir un Pokemon</RouterLink>
      <button class="logout-button" @click="logout">Sortir / Login</button>
    </header>

    <main class="content">
      <div v-if="loading" class="status">Carregant...</div>
      <div v-else-if="error" class="status">{{ error }}</div>
      <div v-else>
        <div v-if="data && data.pokemons && data.pokemons.length">
          <div class="grid">
            <PokemonCard 
              v-for="pokemon in data.pokemons" 
              :key="pokemon.id" 
              :pokemon="pokemon" 
              @deletepokemon="deletePokemon"
            />
          </div>
        </div>
        <div v-else class="status">
          No hi ha Pokemons disponibles.
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f8f9fa;
  min-height: 100vh;
}

.main-header {
  background: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
  color: white;
  padding: 40px 20px;
  text-align: center;
  border-radius: 0 0 20px 20px;
  position: relative;
}

.home-link {
  color: white;
  text-decoration: underline;
  display: block;
  margin-top: 10px;
}

.logout-button {
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 10px 15px;
  border-radius: 8px;
  border: none;
  background: white;
  color: #4facfe;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

.logout-button:hover {
  opacity: 0.9;
}

.content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.status {
  text-align: center;
  padding: 40px;
  font-size: 1.2rem;
  color: #666;
}
</style>
