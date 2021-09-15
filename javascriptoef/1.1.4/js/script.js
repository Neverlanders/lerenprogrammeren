/**
 Schrijf een programma waarin je aan de gebruiker vraagt hoeveel getallen hij wil
 ingeven. Schrijf vervolgens het totaal van alle ingegeven getallen op het scherm.
 De totale som van x getallen is x.
 Voorbeeld:
 Hoeveel getallen?: 3
 Geef getal 1 in: 4
 Geef getal 2 in: 3
 Geef getal 3 in: 2
 De totale som van 3 getallen is 9.
 **/

/**LET OP DIT IS IN JAVASCRIPT ES5 GESCHREVEN*/

var aantalGetallen = parseInt(prompt('Hoeveel getallen wenst u in te geven?'));
var som = 0;
var i = 1;
while(i<=aantalGetallen){
    var getal = parseInt(prompt("Geef getal " + i + " in"));
    som += getal
    i++;

}

console.log("De totale som van " + i + " getallen is " + som);


/**LET OP DIT IS IN JAVASCRIPT ES6 GESCHREVEN
 * De enkele quotes zijn geen quotes maar BACKTICKS die je
kan terugvinden onder het pond teken naast je enter toets**/

const aantalGetallen = parseInt(prompt('Hoeveel getallen wenst u in te geven?'));
let som = 0;
let i = 1;
do{
    let getal = parseInt(prompt(`Geef getal ${i} in`));
    som += getal
    i++;

}while(i <= aantalGetallen)

console.log(`De totale som van ${i-1} getallen is ${som}`);
