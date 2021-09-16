/*
Schrijf een programma die je alle potentiële mogelijk combinaties geeft in een 2-
decimale vorm uitgeprint met een komma ertussen tot en met 99.
 Voorbeeld van de output:
 00, 01,02,03,04,05,06,08,09,10,11 .. 99
*/

var i = 0;
var resultaat="";
for(let i=0; i<=99; i++){
	if(i <=10){
		resultaat += '0'+i+','
	}else{
	resultaat += 0+i+',';
	}
}
resultaat = resultaat.substring(0, resultaat.length - 1);
console.log(resultaat);
