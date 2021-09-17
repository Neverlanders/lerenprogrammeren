/*
Schrijf een programma die de facultateit van een getal weergeeft.
  De faculteit van 5 is bijvoorbeeld:
  5x4x3x2x1 = 120
 Vraag dit getal aan de gebruiker
*/
var faculteit = 1;
var teller = 1;
var afdruk = '';

const getal = parseInt(prompt('Geef getal in'));
while(teller <= getal){
	faculteit *= teller;
	afdruk += teller + 'x';
	teller++;
}
/*afdruk op scherm en niet in console.log met ES6 javascript*/
document.write(`De faculteit van ${getal} is ${faculteit}<br>`);
document.write(afdruk.substring(0,afdruk.length-1) + "=" + faculteit);
