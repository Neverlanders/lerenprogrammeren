/*De gebruiker dient zijn geboortejaar in te geven.
 De gebruiker dient eveneens het lopende jaartal in te te geven.
 Wanneer het verschil tussen het lopende jaartal en geboortejaar groter of gelijk is
aan 18, can schrijf je op het scherm:”Vanaf nu mag, kan en beslis ik alles, binnen de
wettelijke grenzen”.
 In alle andere gevallen:”Gelukkig heb ik mijn ouders die alles voor me regelen.”*/

var geboorteJaar = prompt('Geef geboortejaar in');
var lopendeJaar = prompt('Geef het huidige jaartal in');

if(lopendeJaar - geboorteJaar >= 18){
    document.getElementById("schermweergave").innerHTML = 'Vanaf nu mag, kan en beslis ik alles, binnen de wettelijke grenzen';
}else{
    document.getElementById("schermweergave").innerHTML = 'In alle andere gevallen:”Gelukkig heb ik mijn ouders die alles voor me regelen';

}
