/*
Wemakenonzeklaslijst.
Vraagaandegebruikerhoeveelnamenhijwilingevenenvuldezeineenarray. • 
Zorgervoordatjedenamenonderelkaarafdruktopdevolgendemanier.
Dirk 
  Sam 
Luc 
  Bob

*/
var namenLijst=[];
aantalNamen = parseInt(prompt('Hoeveel namen wenst u in te geven?'));
for(var x=0; x <= aantalNamen-1; x++){
	namenLijst.push(prompt(`Geef naam nummer ${x+1} in`));
}
for(var x=0; x <= aantalNamen-1; x++){
	var resultaat = (x%2 == 0) ? console.log('- ',namenLijst[x]) :  console.log('  - ',namenLijst[x]);//voorbeeld van shorthand if, else.
}

