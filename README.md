# Apprendre le front

Projet d'apprentissage du développement front-end : la même page de restaurant (carte, panier, filtre par prix) réalisée deux fois, d'abord en HTML/CSS/JavaScript, puis avec Vue 3.

## Structure

```
apprendre-front/
├── restaurant-js/    → version HTML, CSS et JavaScript
└── restaurant-vue/   → version Vue 3 (Vite)
```

## Fonctionnalités

- Affichage de la carte à partir d'un fichier `plats.json`
- Panier avec nombre de plats et total
- Filtre des plats par prix maximum
- Mise en page responsive (Flexbox et Grid)

## Lancer les projets

### restaurant-js

Le chargement des données utilise `fetch`, la page doit donc être servie par un serveur local (et non ouverte en double-clic) :

```bash
cd restaurant-js
python -m http.server
```

Puis ouvrir `http://localhost:8000`. L'extension VS Code **Live Server** fonctionne aussi.

### restaurant-vue

Prérequis : Node.js (version LTS).

```bash
cd restaurant-vue
npm install
npm run dev
```

Puis ouvrir l'adresse affichée dans le terminal (par défaut `http://localhost:5173`).

## Notions travaillées

**CSS** : box model, Flexbox, Grid, responsive, variables CSS

**JavaScript** : `const` / `let`, arrow functions, `map` / `filter` / `reduce`, manipulation du DOM, événements, `async` / `await`, `fetch`

**Vue 3** : Composition API (`<script setup>`), `ref`, `computed`, `onMounted`, directives (`v-for`, `v-if`, `v-model`, `@`, `:`), composants avec props et emit