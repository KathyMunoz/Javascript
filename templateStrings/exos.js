//Exemple de concaténation de chaines de caractères.
const maison = {
  suite : "La casa ",
  encoreSuite : "de ",
  encoreSuitedeux : "reves"
};

const totalPhrase = maison.suite + maison.encoreSuite + maison.encoreSuitedeux + ","+ "es la mejor de todas.";

console.log(totalPhrase);

//Exemple d’utilisation des template strings. Les template strings permettent d’insérer des expressions JS directement dans une chaîne avec ${...}.

const ecuador = {
    capital: "Guayaquil,",
    moneda: "tiene como moneda el dolar",
    playa: "y como playa,Salinas"   
};

const miPhrase =
`${ecuador.capital} linda ciudad, ${ecuador.moneda} ${ecuador.playa}`;


console.log(miPhrase);
//Reproduire le résultat suivant en créant trois variables (pour chaque personnage). Faites une version avec concaténation
//Salut ! Je suis Peter Parker, alias Spider-man ! Vous n'auriez pas vu Mary-Jane par hasard ?

//je cree trois variables pour chaque personnage
let prenom = "Peter Parker";
let alias = "Spider-man";
let personnage = "Mary-Jane";
//je construi la phrase avec concaténation
let phrase = "Salut ! Je suis " + prenom + ",alias " + alias + " ! Vous n'auriez pas vu " + personnage + " par hasard?";

console.log(phrase);
//et une version en template String.
let phrase2 = `Salut ! Je suis ${prenom}, alias ${alias} ! Vous n'auriez pas vu ${personnage} par hasard?`;
console.log(phrase2);

