<script setup>
const props = defineProps({
    p: {
        type: Object,
        required:true
    }
})

const emit = defineEmits(['deletePokemon']);

const esborrarPokemon = (id) => {
    if (confirm(`Segur que vols eliminar a ${props.pokemon.nombre}?`)) {
        emit('deletePokemon', id);
    }
};
</script>

<template>
<div>
    <h3>{{ p.name }}</h3>
    <p>Type: {{ p.type }}</p>
    <p>Generation{{ p.generation }}</p>
    <RouterLink :to="`/editarPokemon/${pokemon.id}`" class="editar">Editar</RouterLink>
    <button @click="esborrarPokemon(pokemon.id)" class="esborrar">Eliminar</button>
</div>
</template>