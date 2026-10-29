<script setup>

defineProps({plat : Object});
const emit = defineEmits(["ajouter"]);
</script>

<template>
    <div class="plat">
            <h3>{{ plat.nom }}</h3>
            <p>{{ plat.description }}.</p>
            <p>{{ plat.prix }}€</p>
            <button type="button" @click="emit('ajouter', plat)">ajouter</button>
        </div>
</template>