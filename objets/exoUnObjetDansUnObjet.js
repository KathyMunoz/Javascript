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

let film = {};

film.titre = "Inception";// ou aussi fim["titre"] = "Inception"; (deux façon pour ajouter des propietes)
film.realisateur = "Christopher Nolan";
film.annee = 2010;
film.genre = "Science-Fiction";
console.log(film);
// un objet de votre choix ou vous allez devoir créer et justifier 4 clés/valeurs (avec des commentaires).
let etudiant = {};//creation objet etudiant

etudiant.nom = "Dupont"; // Nom etudiant->chaine de caracteres//on choisi un string car un nom est un texte
etudiant.age = 21;//Age etudiant->nombre//on choisi un number car age est une valeur numerique
etudiant.matieres = ["Maths", "Informatique", "Histoire"];//array pour stocker plusieurs matieres
etudiant.estInscrit = true;//boolean pour indiquer V ou F
console.log(etudiant);
//resultat= un objet avec 4 propietes de types differents(string, number, array, boolean)