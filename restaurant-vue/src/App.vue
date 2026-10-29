<script setup>
import { ref, onMounted, computed } from "vue";
import CartePlat from "./components/CartePlat.vue";


const plats = ref([]);
const panier = ref([]);
const total = computed(() => panier.value.reduce((somme, p) => somme + p.prix, 0));
const prixMax = ref("");
const platsFiltres = computed(() => {
    if (prixMax.value === "") {
        return plats.value;
    }
    return plats.value.filter(p => p.prix <= Number(prixMax.value));
});


onMounted(async () => {
    const response = await fetch("/plats.json");
    plats.value = await response.json();
});

function ajouterAuPanier(plat) {
    panier.value.push(plat);
}



</script>

<template>
  <nav>
        <div> <img src="/image.png"  width="50px" alt="logo"></div>
        <div>
            <a href="#apropos">a propos</a>
            <a href="#carte">Carte</a>
            <a href="#contact">contact</a>
            <span>{{ panier.length }} plat(s) – {{ total }} €</span>
        </div>
    </nav>
    <div id="apropos">
        <p>
            Restaurant et buffet à volonté.
        </p>
        <label for="prix-max">Prix max :</label>
        <input type="number" id="prix-max" v-model="prixMax" min="0" placeholder="ex : 12">
    </div>
    <div id="carte">
        <CartePlat v-for="plat in platsFiltres" :key="plat.nom" :plat="plat" @ajouter="ajouterAuPanier"/>
    </div>
</template>





<style>
:root {
    --bordure: #ccc;
    --rayon: 8px;
}


*, *::before, *::after {
  box-sizing: border-box;
}


nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav div {
    display: flex;
    gap: 1rem
}


#carte {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-top: 1rem;
}

.plat {
    padding: 1rem;
    border: 1px solid var(--bordure); 
    border-radius: var(--rayon);
    display: flex;
    flex-direction: column;
}

.plat button {
    margin-top: auto;
    align-self: flex-start;
}
</style>
