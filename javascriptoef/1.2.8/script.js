/**
Schrijf een programma die de volgende reeks horizontaal op het scherm schrijft:
 Voorbeeld:
o Vraag een getal aan de gebruiker:
o Wanneer dit getal bijvoorbeeld 100 is dan is de volgende reeks de uitkomst:
  1, 2, 4, 8, 16, 32, 64
 o Wanneer dit getal bijvoorbeeld 130 is dan is de volgende reeks de uitkomst:
  1, 2, 4, 8, 16, 32, 64, 128
**/
var getal = parseInt(prompt('Geef een getal in groter dan 0'));
product=1;
resultaat = "";
for (i=1; i<=getal;i++){
	resultaat = resultaat + product + ",";
	product = i*2;
}
console.log(resultaat.substring(0,resultaat.length-1));

