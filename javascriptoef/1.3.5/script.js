/*
Zorg ervoor dat je het alfabet in een array inleest in kleine letters.  
Gebruik hiervoor een lus • 
Zorg ervoor dat je deze array naar een andere array kopieert  en dat deze opgevuld is met het alfabet in hoofdletters 
Gebruik een Built-in functie hiervoor 
*/
let teller = 97;
hoofdLetter='';
alfabetKlein = [];
alfabetGroot = [];

for(let x=0; x <=25;x++){
	alfabetKlein.push(String.fromCharCode(teller));
	hoofdLetter = alfabetKlein[x].toUpperCase();
	alfabetGroot.push(hoofdLetter);
	teller++;
}
console.log(alfabetKlein);
console.log(alfabetGroot);