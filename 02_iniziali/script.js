/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function getInitialsArray (wordsArray) {

    const initials = []; //array delle iniziali

    //ciclo sull'array 
    for(let i = 0; i < wordsArray.length ; ++i) {
      const word = wordsArray[i]; //prendo la parola all'indice [i] e la salvo in una costante 
      const initial = word[0]; // prendp la prima lettera della parola (in posizione 0) e la salvo in una costante 
      initials.push(initial); //aggiungo l'iniziale nel nuovo array 
    }
    return initials ; 

}

//arrow functions 
// const getInitialsArray = (wordsArray) => {
//     const initials = []; //array delle iniziali

//     //ciclo sull'array 
//     for(let i = 0; i < wordsArray.length ; ++i) {
//       const word = wordsArray[i]; //prendo la parola all'indice [i] e la salvo in una costante 
//       const initial = word[0]; // prendp la prima lettera della parola (in posizione 0) e la salvo in una costante 
//       initials.push(initial); //aggiungo l'iniziale nel nuovo array 
//     }
//     return initials ; 
// }

// Invoca la funzione qui e stampa il risultato in console
console.log(getInitialsArray(names)); 


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]