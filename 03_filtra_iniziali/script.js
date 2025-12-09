/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function arrayIni (array, letter) {

    const newArray = []; 

    for(let i = 0; i < array.length ; ++i) {

        const word = array[i]; 

        if(word[0] === letter) {
            newArray.push(word); //aggiungo la parola intera
        }
    }

    return newArray;
}


// arrow functions 
// const arrayIni = (array,letter) => {
//     const newArray = []; 

//     for(let i = 0; i < array.length ; ++i) {

//         const word = array[i]; 

//         if(word[0] === letter) {
//             newArray.push(word); //aggiungo la parola intera
//         }
//     }

//     return newArray;
// }


// Invoca la funzione qui e stampa il risultato in console
console.log(arrayIni(names,"A")); 


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]