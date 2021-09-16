/*
Schrijf een programma die een karakter telt in een tekenreeks(string).
 Tip: maak hierbij gebruik van een built-in functie.

*/
/*met functie charAt**/
var tekenReeks = prompt('Geef een zin in');
var karakter = prompt('Geef een karakter in');

var aantalKarakters = 0;
 for (var plaats = 0; plaats < tekenReeks.length; plaats++)
 {
    if (tekenReeks.charAt(plaats) == karakter)
      {
      aantalKarakters += 1;
      }
  }
  console.log(aantalKarakters);
