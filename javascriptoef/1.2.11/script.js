/*
Schrijf een programma die de getallenreeks van Fibonacci opsomt.
 Vraag aan de gebruiker hoeveel getallen er dienen te worden
weergegeven.  Voorbeeld:  0, 1, 1, 2, 3, 5, 8, 13, 21,
*/

var aantalGetallen = parseInt(prompt('Geef het aantal te tonen getallen in:'));


var getal1 = 0, getal2 = 1, volgendGetal;


for (var i = 1; i <= aantalGetallen; i++) {
	console.log(getal1);
	volgendGetal = getal1 + getal2;
	getal1 = getal2;
	getal2 = volgendGetal;
}
