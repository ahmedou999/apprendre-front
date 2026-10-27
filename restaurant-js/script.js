let plats = [];

async function init() {
    try {
        const response = await fetch("plats.json");
        if(!response.ok) throw new Error(`HTTP ${response.status}`);
        plats = await response.json();
        afficherMenu(plats);
    } catch (error) {
        carte.textContent = "Impossible de charger le menu.";
        console.error(e);
    }
    majPanier();
}

const panier = [];   // const : on modifie le contenu (push), jamais la référence


const carte = document.querySelector("#carte");
const liens = document.querySelector("nav div:last-child");


const affichagePanier = document.createElement("span");
liens.appendChild(affichagePanier);

// --- Mise à jour de l'affichage du panier ---
function majPanier() {
  const total = panier.reduce((somme, plat) => somme + plat.prix, 0);
  affichagePanier.textContent = `Panier : ${panier.length} plat(s) – ${total} €`;
}

const prixMax = document.querySelector("#prix-max");

function afficherMenu(liste) {
    carte.innerHTML = "";
    for(const plat of liste) {
        const div = document.createElement("div");
        div.classList.add("plat");
        div.innerHTML=`
            <h3>${plat.nom}</h3>
            <p>${plat.description}.</p>
            <p>${plat.prix}€</p>
            <button type="button">ajouter</button>`;
        const bouton = div.querySelector("button");   // le bouton DE CETTE carte
        bouton.addEventListener("click", () => {
            panier.push(plat);   // on ajoute l'objet plat entier
            majPanier();         // puis on rafraîchit l'affichage

        });
        carte.appendChild(div);
    }
    
    

} 



prixMax.addEventListener("input", () => 
    {
        const p = prixMax.value;
        if (p === "") {
                afficherMenu(plats);
            } else {
                afficherMenu(plats.filter(plat => plat.prix <= Number(p)));
            }    
    });

init();

