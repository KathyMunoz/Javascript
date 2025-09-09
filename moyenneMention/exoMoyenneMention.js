



//afinir dans le pdf 10

function mention (notes) {
let moy = (notes[0] + notes[1] + notes [2]) /notes.length;
    if (mention>=15){
        return "tres bien";
    }
    if (mention>=10){
        return "assez bien";
    } else {
        return "refus";
        }
}