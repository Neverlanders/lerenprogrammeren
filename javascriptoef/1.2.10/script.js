/*
Schrijf een programma dat de tafels van vermenigvuldiging afdrukt:
 Voorbeeld:  Je vraagt aan de gebruiker de tafel : 1
 Je vraagt aan de gebruiker het eindgetal: 12
 Weergave: (onderstaande weergave dient exact op deze manier
op het scherm te verschijnen)
 1 x 1 = 1, 1 x 2 = 2, 1 x 3 = 3
 1 x 4 = 4, 1 x 5 = 5, 1 x 6 = 6
 1 x 7 = 7, 1 x 8 = 8, 1 x 9 = 9
 1 x 10 = 10, 1 x 11 = 11, 1 x 12 = 12
**/
getal = parseInt(prompt('Maaltafel:'));
eindGetal = parseInt(prompt('Geef eindGetal'));
resultaat = "";
x=1;
for(i=1;i<=eindGetal;i++){
	if(x<=3){
		resultaat = resultaat + getal + "x" + i + "=" + getal*i + ",";
		x++;
	}else{
		console.log(resultaat);
		resultaat = "";
		x=1;
		i--;
	}
}
console.log(resultaat.substring(0,resultaat.length-1));
