/*
Schrijf een programma die de facultateit van een getal weergeeft.
 De faculteit van 5 is bijvoorbeeld:
 5x4x3x2x1 = 120
 Vraag dit getal aan de gebruiker
*/
var getal = parseInt(prompt('Geef een getal in:'));
var fac = 1;
for(i=1; i <= getal;i++){
	fac *=i;

}
console.log(fac);
