/*
Om deel te nemen aan de spelen van de Nationale Loterij moet je minimum 18 jaar oud
zijn. Ontwerp een consoletoepassing waarmee je de leeftijd van de
gebruiker opvraagt. Als de ingevoerde leeftijd minimum 18 jaar bedraagt, krijgt de
gebruiker toegang tot de site van de nationale loterij en verschijnt de tekst: “Je bent x
jaar oud. Je mag deelnemen aan de spelen van de Nationale Loterij.”. Indien niet voldaan
is aan deze voorwaarde verschijnt de tekst: “Om deel te nemen aan de spelen van de
Nationale Loterij moet je minimum 18 jaar oud zijn.”.
*/
var leeftijd = prompt('Geef je leeftijd in:');
if(leeftijd >= 18){
    console.log('Je bent ' + leeftijd + ' jaar oud je mag deelnemen aan de spelen van de Nationale Loterij');
}else{
    console.log('Om deel te nemen aan de spelen van de Nationale Loterij moet je minimum 18 jaar oud zijn.');
}