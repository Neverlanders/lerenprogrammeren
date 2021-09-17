/*
Schrijf een programma die ervoor zorgt dat ervoor zorgt
dat je ieder derde getal in een reeks 2x weergeeft en ieder
reëel 10de getal in een reeks weglaat maar wel een spatie schrijft.
De gebruiker geeft het eindgetal in. Voorbeeld van de output:
1,2,3,3,4,5,6,6,7,8,9,   ,11.. 99
*/
var teller = 1;
var tellerElkeTiende=10;
var afdruk = "";

var getal = parseInt(prompt('Geef een getal in:'));
while(teller <= getal){
	if(teller == tellerElkeTiende){
		afdruk += ","
		tellerElkeTiende +=10

	}else if(teller%3 == 0){
		afdruk += teller + "," + teller + ","
	}else{
		afdruk += teller + ","
	}
	teller++;
}
document.write(afdruk);
