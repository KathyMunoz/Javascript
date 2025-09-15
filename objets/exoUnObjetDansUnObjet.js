//Vous devez créer un objet--DRESSING--, ce dernier, doit contenir un nouvel objet--PULL--, ce nouvel doit contenir un objet également--LAINE-- et dans ce dernier vous devez créer un tableau.
//Le but, c'est d'afficher un élément de notre tableau via les différentes couches d'objet.
let dressing = {
    "pulls": {
        "laine" : ["beige","rose","noir"],
    }
};
let afficher = "pulls";
console.log(dressing);
console.log(dressing.pulls);
console.log(dressing.pulls.laine[2]);
console.log(dressing[afficher]);
// (Bonus) Créer trois objets : 
// un objet bibliothèque avec ses propriétés avec un objet livre à l'intérieur avec ses propres propriétés

let bibliotheque = {
        "horreur": {
            "livre": {
                "titre": "Le cauchemar",
                "chapitre1": "Introduction",
                "chapitre2": "Suspense"
            }
        },
        "fantastique": {
            "livre": {
                "titre": "Magie et mystère",
                "chapitre1": "Prologue",
                "chapitre2": "Aventure"
            }
        },
        "romantique": {
            "livre": {
                "titre": "L'amour",
                "chapitre1": "Rencontre",
                "chapitre2": "Déclaration"
            }
        }
}
// un objet film (vide) et vous allez devoir ajouter 4 clés avec valeurs en dehors de l'objet film
// un objet de votre choix ou vous allez devoir créer et justifier 4 clés/valeurs (avec des commentaires).