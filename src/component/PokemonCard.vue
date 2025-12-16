<script setup>
const props = defineProps({
    p: {
        type: Object,
        required:true
    }
})
</script>

<template>
<div>
    <h3>{{ props.p.name }}</h3>
    <p>{{ props.p.type }} - {{ props.p.generation }} </p>
    <!--RouterLink :to="{name:'MealDetail', params:{idMeal:p.idMeal}}">Recepta</RouterLink-->
</div>
</template>