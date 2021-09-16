/*
Schrijf een programma die het volgende op het scherm weergeeft:
 De gebruiker geef een even aantal even lijnen in.
*
**
***
****
*****
*****
****
***
**
*
*/

/*oplossing in javascript es5*/
var aantalLijnen= parseInt(prompt('Geef een even aantal lijnen in:'));
var helft = aantalLijnen/2;
var ster = '*';
var resultaat = "";
for(var i=1;i <= helft; i++){
	resultaat = resultaat + ster;
	console.log(resultaat);
}
for(i=helft;i >= 1;i--){
	resultaat = resultaat.substring(0,i);
	console.log(resultaat);
}
/*oplossing in javascript es6*/
const aantalLijnen= parseInt(prompt('Geef een even aantal lijnen in:'));
const helft = aantalLijnen/2;
let ster = '*';

for(let i=1;i <= helft; i++){
	document.write(ster);
	ster += '*';
	document.write("<br>");
}
ster = ster.substring(0, ster.length - 1)
for(let i=1;i <= helft; i++){
	document.write(ster);
	ster = ster.substring(0, ster.length - 1);
	console.log(ster);
	document.write("<br>");
}
