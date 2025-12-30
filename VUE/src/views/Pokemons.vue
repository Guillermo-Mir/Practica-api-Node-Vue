<script setup>
import {useFetch} from "@/composable/useFetch";
import {ref} from 'vue';

const url   = ref(`http://localhost:3000/pokemon`)

const {data, error, loading, fetchData} = useFetch(url)

</script>

<template>
 <h1>POKEMONS</h1>
 <div v-if="loading">Carregant...</div>
 <div v-else-if="error">{{ error }}</div>
 <div v-else>
    <div v-if="data && data.pokemons">
        
    </div>
 </div>
</template>

<style scoped></style>