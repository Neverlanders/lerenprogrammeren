/**
Schrijf een programma die het volgende op het scherm weergeeft:
• De gebruiker geeft het maximum aantal sterren in: (bijv. 5)
*
**
***
****
*****
**/
/*oplossing 1*/
/* in javascript es5 met output in de console*/
var aantalSterren = parseInt(prompt('Geef het maximum aantal sterren in:'));
var ster = '*';
var totaalAantalSterren = ster;
var resultaat = "";

for(let i=1;i <= aantalSterren; i++){
	resultaat = resultaat + ster;
	console.log(resultaat);
}

/**oplossing 2**/
/** in javascript es6 met output in de pagina**/
/*document.write zorgt voor het schrijven van 1 lijn in de pagina.*/
/*de br tag zorgt voor een volgende lijn*/
const aantalSterren = parseInt(prompt('Geef het maximum aantal sterren in:'));
let ster = '*';

for(let i=1;i <= aantalSterren; i++){
	document.write(ster);
	ster += '*';
	document.write("<br>");
}

