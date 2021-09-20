/*
Schrijf een programma waarmee je aan de gebruiker vraagt om getallen in te geven tot hij een negatief getal intikt.  
Lees de getallen in een array in. o Geef GETAL x in: 
 Vervolgens vraag je aan de gebruiker het hoeveelste getal hij wenst te zien op het scherm. 
 
*/
let teller = 0;
let getal = 0;
var getallenReeks = [];

while(getal >= 0){
	getallenReeks.push(parseInt(prompt("Geef getal " + (teller+1) + " in:")));
	getal = getallenReeks[teller];
	teller++;
}
hoeveelsteGetal = parseInt(prompt('Het hoeveelste getal wens je te zien?'));
hoeveelsteGetal = getallenReeks[hoeveelsteGetal-1];
console.log(hoeveelsteGetal);