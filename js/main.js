// "use strict"; //ci permette di vedere più errori, ad esempio Automaitic Globals

//Genera un numero casuale tra 1 e 100
function getRandomNumber() {
    let numero;

    numero = Math.floor( Math.random() * 100 +1 );

    return numero;
}

//Genera un numero casuale compreso tra min e max (compresi)
function getRandomNumberInRange(min, max) {
    let numero;

    numero = Math.floor( Math.random() * (max - min + 1) + min );

    return numero;
}

// let x = getRandomNumber();
// let y = getRandomNumberInRange(120, 125);
// let z = getRandomNumberInRange(33, 42);

for (let i = 0; i < 10; i++) {
    
    let numeroCasuale = getRandomNumberInRange(1,100);
    console.log(numeroCasuale);
    
}


function sommaNumeri(num1, num2, num3) {

    let a = parseInt(num1);
    let b = parseInt(num2);
    let c = parseInt(num3);
    let risultato = a + b + c;

    if(isNaN(risultato)) {
        console.error("Il risultato è NaN");
    }

    // alert(risultato);

    return risultato;
    alert("non vedrete mai questo messaggio");
}

// let inputNumero1 = prompt("Inserisci un numero da addizionare a 42");
let inputNumero1 = getRandomNumberInRange(0,100);
let inputNumero2 = getRandomNumberInRange(90,100);

let somma = sommaNumeri(inputNumero1, inputNumero2, 42 );

console.log(`${inputNumero1} + ${inputNumero2} + 42 = ${somma}`);


// console.log(risultato); //risultato non è visibile QUI, perchè è fuori scope


function generaScalaDiNumeri(inizio, fine) {
    let risultato = [];

    for (let i = inizio; i <= fine; i++) {
        risultato.push(i);        
    }

    return risultato;
}
let scala = generaScalaDiNumeri(33, 12);
console.log("Scala 3-12", scala);


// function restituisciQuindici() {
//     return 15;
// }

// let x = restituisciQuindici();
// console.log( x );

// if( restituisciQuindici() > 10 ){
//     console.log("15 è maggiore di 10");
// }

prova(); //funzione definita in altro file, che deve essere importato prima di questo





function isPariOrDispari(numero) {

    if(numero % 2 == 0) {
        // console.log("ciao1"); //visibile
        return "pari";
        console.log("ciao2"); //non visibile
    }

    return "dispari";
}

// let numeroUtente = prompt("Inserisci un numero");
// numeroUtente = parseInt(numeroUtente);
// console.log("Numero: ", numeroUtente);

// let risultatoPariDispari = isPariOrDispari(numeroUtente);

// console.log("Il numero è " + risultatoPariDispari);

// if( risultatoPariDispari=="pari" ) {
//     console.log("E' pari");
// } else {
//     console.log("E' dispari");
// }



function isPari(numero) {

    let risultato = false;

    if(numero % 2 == 0) {
        risultato = true;
    }

    return risultato;
}

let numeroUtente = parseInt( prompt("Inserisci un numero") );

if( isPari(numeroUtente) ) {
    console.log("E' pari!", numeroUtente);
} else {
    console.log("E' dispari!", numeroUtente);
}

let n1 = 12;

if( isPari(n1)==true ) {
    console.log("E' pari!", n1);
} else {
    console.log("E' dispari!", n1);
}

let n2 = 13;

if( isPari(n2) ) {
    console.log("E' pari!", n2);
} else {
    console.log("E' dispari!", n2);
}