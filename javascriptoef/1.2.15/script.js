/*
Schrijf een programma waarin je aan de gebruiker vraagt
hoeveel getallen hij wil ingeven. Schrijf vervolgens het totaal
van alle ingegeven getallen op het scherm.
 De totale som van x getallen is x.
 Voorbeeld:
 Hoeveel getallen?: 3
 Geef getal 1 in:
 Geef getal 2 in:
 Geef getal 3 in
 De totale som van 3 getallen is x.
 Het gemiddelde van de 3 getallen is x

*/

var som = 0;
var teller = 1;
var gemiddelde = 0;

aantalGetallen = parseInt(prompt('Hoeveel getallen:'));
while(teller <= aantalGetallen){
	var getal = parseInt(prompt('Geef getal in'));
	som += getal;
	teller++;
}
console.log("De totale som van: " + aantalGetallen + " getallen is " + som);
//document.write(`De totale som van: ${aantalGetallen} getallen is ${som}<br>`);
gemiddelde = som/aantalGetallen;
console.log("Het gemiddelde van de " + aantalGetallen + " getallen is " + gemiddelde);
//document.write(`Het gemiddelde van de ${aantalGetallen} getallen is ${gemiddelde}`);
