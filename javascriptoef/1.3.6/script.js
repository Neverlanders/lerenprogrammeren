/*
Zorg ervoor dat je het alfabet in een array inleest in kleine letters.  
Gebruik hiervoor een lus  Zorg ervoor dat je deze array naar een andere array kopieert  en dat deze opgevuld is met het alfabet in hoofdletters 
 Je mag geen gebruiken maken van de functies lowercase of uppercase!   
*/
var teller = 97;
hoofdLetter='';
alfabetKlein = [];
alfabetGroot = [];

for(var x=0; x <=25;x++){
	alfabetKlein.push(String.fromCharCode(teller));
	hoofdLetter = String.fromCharCode(teller-32);
	alfabetGroot.push(hoofdLetter);
	teller++;
}
console.log(alfabetKlein);
console.log(alfabetGroot);