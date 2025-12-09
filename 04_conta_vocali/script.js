/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function vowelsCount (str) {

    let counter = 0; 
    const vowelsFound = []; //mi serve per salvare le vocali in un nuovo array 

    for ( let i = 0; i < str.length ; ++i) { //ciclo sulla stringa 
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
           
           // se all'indice in cui sto ciclando trovo una vocale , incremento il count e salvo in un nuovo array 
            ++counter ; 
            vowelsFound.push(str[i]); 
        }
    }
    
    return `${counter} (${vowelsFound.join(',')}) `; 

}


//arrow functions 
// const vowelsCount = (str) => {
//       let counter = 0; 
//     const vowelsFound = []; //mi serve per salvare le vocali in un nuovo array 

//     for ( let i = 0; i < str.length ; ++i) { //ciclo sulla stringa 
//         if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
           
//            // se all'indice in cui sto ciclando trovo una vocale , incremento il count e salvo in un nuovo array 
//             ++counter ; 
//             vowelsFound.push(str[i]); 
//         }
//     }
    
//     return `${counter} (${vowelsFound.join(',')}) `; 
// }

// Invoca la funzione qui e stampa il risultato in console

console.log(vowelsCount(word)); 

//Risultato atteso se si passa 'javascript': 3 (a, a, i)