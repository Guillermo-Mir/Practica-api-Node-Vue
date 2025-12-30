<script setup>
const props = defineProps({
    pokemon: {
        type: Object,
        required: true
    }
})

const emit = defineEmits(['deletepokemon']);

const esborrarPokemon = () => {
    if (confirm(`Segur que vols eliminar a ${props.pokemon.name}?`)) {
        emit('deletepokemon', props.pokemon.id);
    }
};
</script>

<template>
  <div v-if="pokemon" class="card">
    <h3 class="title">{{ pokemon.name }}</h3>
    <p class="info"><strong>Type:</strong> {{ pokemon.type }}</p>
    <p class="info"><strong>Generation:</strong> {{ pokemon.generation }}</p>
    <div class="actions">
      <RouterLink :to="`/editarPokemon/${pokemon.id}`" class="link-edit">Editar pokemon</RouterLink>
      <button @click="esborrarPokemon" class="btn-delete">Eliminar</button>
    </div>
  </div>
</template>

<style scoped>
.card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 250px;
}

.title {
  color: #5dade2;
  font-size: 1.4rem;
  margin: 0 0 10px 0;
}

.info {
  color: #666;
  margin: 2px 0;
  font-size: 0.95rem;
}

.actions {
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.link-edit {
  color: #5dade2;
  text-decoration: none;
  font-size: 0.9rem;
}

.link-edit:hover {
  text-decoration: underline;
}

.btn-delete {
  background-color: #ff6b6b;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 8px;
  cursor: pointer;
  width: fit-content;
  font-weight: bold;
}

.btn-delete:hover {
  background-color: #fa5252;
}
</style>