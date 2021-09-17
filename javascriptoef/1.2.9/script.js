/*
Schrijf een programma die alle priemgetallen in een rij afdrukt. 
Voorbeeld:  Vraag een eindgetal aan de gebruiker: 
Alle getallen gelijk aan en lager dan het eindgetal dienen te worden getest.
  Zijn ze een priemgetal of niet. 
  Een priemgetal is enkel deelbaar door 1 en zichzelf.
*/
 //get the input value. Bijvoorbeeld 99
 var eindGetal = prompt('Geef eindGetal in');

// variabele num start op 1
var num = 1 ;

//while lus die doorgaat zolang num kleiner is dan eindgetal dus 1 < 99
while (num < eindGetal ) {
 // variabele count wordt telkens bij iedere keer de lus passeert op 0 gezet
  var count=0;
    //de for lus telt vanaf 1 tot hij minstens gelijk is aan num uit de buitenste while lus.
    //d.w.z. dat eerst deze lus x aantal keer wordt uitgevoerd vooraleer de buitenste while lus kan doorgaan.
     for (var i=1;i<=num;i++) {
      //Het bepalen van de REST doen we met de % deling ook wel de modula genoemd. Hier delen
      // we num door de teller.  De eerste keer is dit 1/1 geeft als rest 0.
      // Wanneer de rest 0 is dan gaan we count met 1 optellen
      if ((num%i)==0) {
       count++;
      }
     }
     //wanneer de count kleiner dan 3 blijft dan is hij deelbaar door enkel zichzelf en door 1,
 //dit geeft dus een priemgetal weer.
 if(count<3) {
  document.write(num + ' , ');
 } num++;
}




