//Exemple de concaténation de chaines de caractères.
const maison = {
  suite : "La casa ",
  encoreSuite : "de ",
  encoreSuitedeux : "reves"
};

const totalPhrase = maison.suite + maison.encoreSuite + maison.encoreSuitedeux + ","+ "es la mejor de todas.";

console.log(totalPhrase);

//Exemple d’utilisation des template strings

const ecuador = {
    capital: "Guayaquil,",
    moneda: "tiene como moneda el dolar",
    playa: "y como playa,Salinas"   
};

const miPhrase =
`${ecuador.capital} linda ciudad, ${ecuador.moneda} ${ecuador.playa}`;


console.log(miPhrase);