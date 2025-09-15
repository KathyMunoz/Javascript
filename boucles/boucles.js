let i = 0;
let dessin = [];

while (i<10) {
    i++;
    dessin.push("#");
    console.log(dessin);
}


//exercise calculer une moyenne + for


function moyenne (tab) {
    let total = 0;
    for (let i=0 ; i<tab.length ; i++){
        total += tab [i];
    }
    return total/tab.length;
}
console.log(moyenne([1,2,3,4,5]));