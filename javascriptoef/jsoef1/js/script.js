/*
* LEREN PROGRAMMEREN MET JAVASCRIPT - OEF 1
* */

var naam = prompt("Geef uw naam in");
var leeftijd = parseInt(prompt("Geef uw Leeftijd in"));

/*
if(leeftijd => 16){
    if(leeftijd => 18){
         console.log(naam, "u mag deelnemen");
    }else{
        console.log(naam, "mits toestemming van uw ouders");
    }
}else{
    console.log(naam, "u mag niet deelnemen");
}*/

/*if(leeftijd => 18){
    console.log(naam, "u mag deelnemen");
}else if(leeftijd < 16){
    console.log(naam, "geen deelname");
}else{
    console.log(naam, "u mag  deelnemen mits toestemming");
}*/

if (leeftijd >= 18) {
    console.log(naam, "u mag deelnemen");
} else if (leeftijd >= 16) {
    console.log(naam, "geen deelname toestemming");
} else {
    console.log(naam, "geen");
}