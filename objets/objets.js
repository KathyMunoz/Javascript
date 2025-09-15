var voiture = { 
  "nbChevaux": 500, 
  "vitesseMax": 450, 
  "faiblesse": ["accéleration","adhérence"],
  "pilotes": {
      "pilote": "JACK",
      "copilote": "JANINE",
  }
}; 
let variable = voiture;
voiture.pilotes.copilote = "Kathy";
console.log(variable);

var afficher = "vitesseMax";
voiture.marque = "BMW";
delete voiture.marque;
console.log(voiture.pilotes);
console.log(voiture.pilotes.copilote);
//console.log(voiture.hasOwnProperty("vitesseMax"));
// console.log(voiture.vitesseMax);
// console.log(voiture["vitesseMax"]);
// console.log(voiture [afficher]);
// console.log(voiture.faiblesse[1]);

// const objetB = {
//     b: "Hello"
// };
// let variable = objetB;
// variable.b = "Holaquetal";
// console.log(objetB.b);
// console.log(variable.b);