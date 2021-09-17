/*
Schrijf een programma die het kleinste gemeen veelvoud van 2 getallen weergeeft.
Vraag aan de gebruiker de 2 getallen  Voorbeeld:
o Getallen 15 en 27
o Weergave op het scherm:
o Het kleinste gemene veelvoud van 15 en 27 is: 135
*/
var hulp="";
var breukTeller=0;
var eersteGetal=parseInt(prompt('Eerste getal'));
var tweedeGetal=parseInt(prompt('Tweede getal'));
var grootsteGemeneDeler = 0;
var kleinsteGemeenVeelvoud = 0;

if(eersteGetal < tweedeGetal){
	hulp=eersteGetal;
	eersteGetal = tweedeGetal;
	tweedeGetal = hulp;
}
breukTeller = eersteGetal * tweedeGetal;
for(var x=1; x <=eersteGetal;x++){
	if(eersteGetal%x == 0 && tweedeGetal%x ==0){
		grootsteGemeneDeler = x;
	}
}
kleinsteGemeenVeelvoud = breukTeller/grootsteGemeneDeler;
//document.write(`Het kleinste gemeen veelvoud van ${eersteGetal} en ${tweedeGetal} is ${kleinsteGemeenVeelvoud}`);
console.log("Het kleinste gemeen veelvoud van " + eersteGetal + " en " + tweedeGetal + " is " + kleinsteGemeenVeelvoud);
