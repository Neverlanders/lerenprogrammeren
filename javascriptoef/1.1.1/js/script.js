/*
Om deel te nemen aan de spelen van de Nationale Loterij moet je minimum 18 jaar
oud zijn. Ontwerp een consoletoepassing waarmee je de leeftijd van de
gebruiker opvraagt. Als de ingevoerde leeftijd minimum 18 jaar bedraagt, krijgt de
gebruiker toegang tot de site van de nationale loterij en verschijnt de tekst: “Je bent x
jaar oud. Je mag deelnemen aan de spelen van de Nationale Loterij.”. Indien niet
voldaan is aan deze voorwaarde verschijnt de tekst: “Om deel te nemen aan de
spelen van de Nationale Loterij moet je minimum 18 jaar oud zijn.”.

Wanneer men 18 jaar of ouder is dient men te vragen of ze een volledig bulletin van
12 vakjes willen spelen. Bij een volledig bulletin toon je de kostprijs van 20 euro.
Voor 2 vakjes is de kostprijs 4 euro. Voor 4 vakjes 8 euro. Voor 6 vakjes 12 euro.
Voor 8 vakjes 16 euro. Voor 10 vakjes 18 euro.
*/

var leeftijd = prompt('Geef je leeftijd in:');
if(leeftijd >= 18){
    console.log('Je bent ' + leeftijd + ' jaar oud je mag deelnemen aan de spelen van de Nationale Loterij');
    var aantalVakjes = prompt('Hoeveel vakjes wil je spelen? 2, 4, 6, 8, 10 of 12');
    switch(aantalVakjes){
        case '2':
            console.log ('Voor 2 vakjes is de kostprijs 4 euro');
            break;
        case '4':
            console.log ('Voor 4 vakjes is de kostprijs 8 euro');
            break;
        case '6':
            console.log ('Voor 6 vakjes is de kostprijs 12 euro');
            break;
        case '8':
            console.log ('Voor 8 vakjes is de kostprijs 16 euro');
            break;
        case '10':
            console.log ('Voor 10 vakjes is de kostprijs 18 euro');
            break;
        case '12':
            console.log ('Voor 12 vakjes is de kostprijs 20 euro');
            break;
        default:
            console.log('Geen geldige keuze');}
}else{
    console.log('Om deel te nemen aan de spelen van de Nationale Loterij moet je minimum 18 jaar oud zijn.');
}