/*
Schrijf een programma waar je de gebruiker naar een getal vraagt. Controleer
ieder getal tussen 0 en het ingegeven getal en druk de even getallen af op het
scherm.
*/

/*javascript es5 oplossing met afdruk in de console*/
var getal = parseInt(prompt('Geef een getal in groter dan 0'));
for(i=1; i <= getal; i++){
	var hulpGetal = i%2;
	if(hulpGetal == 0){
		console.log(i);
	}
}
/*javascript es6 oplossing met afdruk op het scherm*/

let getal = parseInt(prompt('Geef een getal in groter dan 0'));
for(i=1; i <= getal; i++){
	let hulpGetal = i%2;
	if(hulpGetal == 0){
		document.write(i);
		document.write('<br>');
	}
}
