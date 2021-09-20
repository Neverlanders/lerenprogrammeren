/*
Zorg ervoor dat je 2 arrays inleest met willekeurige getallen.  De arrays tellen elk 10 getallen. 
 Zorg ervoor dat een array wordt gemaakt in de derde array met enkel met enkel en alleen de even getallen vanuit de 2 vorige arrays. 
 Daarnaast geef je de som van de oneven getallen ook terug van de eerste 2 arrays. 
*/

var reeks1=[];
var reeks2=[];
var reeks3=[];
var somOneven = 0;
var getal = 0;
maxGetal = parseInt(prompt('Geef het max getal in:'));

for(var x=0;x<10;x++){
	reeks1.push(Math.floor(Math.random() * (maxGetal - 0 + 1) ) + 0);
	reeks2.push(Math.floor(Math.random() * (maxGetal - 0 + 1) ) + 0);

	if(reeks1[x]%2 == 0){
		reeks3.push(reeks1[x]);
		somOneven = somOneven + reeks1[x];
	}
	if(reeks2[x]%2 == 0){
		reeks3.push(reeks2[x]);
		somOneven = somOneven + reeks2[x];
	}
}
console.log(reeks1);
console.log(reeks2);
console.log(reeks3);
console.log("Som oneven getallen:" + somOneven);


