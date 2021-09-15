/*
OEFENING 4: uitbreiding op oefening 3
 Totaal mag nooit een negatief getal zijn!
 Laat de gebruiker weten waarom.
*/

var geboorteJaar = prompt('Geef geboortejaar in');
var lopendeJaar = prompt('Geef het huidige jaartal in');

if(lopendeJaar - geboorteJaar >= 18){
    document.getElementById("schermweergave").innerHTML = 'Vanaf nu mag, kan en beslis ik alles, binnen de wettelijke grenzen';
}else if(lopendeJaar - geboorteJaar < 1){
    document.getElementById("schermweergave").innerHTML = 'Geboortejaar is groter dan huidig jaar, dit kan niet';

}else{
    document.getElementById("schermweergave").innerHTML = 'In alle andere gevallen:”Gelukkig heb ik mijn ouders die alles voor me regelen';

}
