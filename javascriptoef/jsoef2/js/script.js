/*
* LEREN PROGRAMMEREN MET JAVASCRIPT - OEF 1
* */

var naam = prompt("Geef uw naam in");
var leeftijd = parseInt(prompt("Geef uw Leeftijd in"));
var keuzeBulletin, aantalVakjes;

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
    keuzeBulletin = prompt("Volledige bulletin? J/N");
    if (keuzeBulletin == "J") {
        console.log("Volledig bulletin 20 euro");
    } else {
        aantalVakjes = parseInt(prompt("Hoeveel vakjes"));
        if (aantalVakjes == 10) {
            console.log("prijs van 18 euro");
        } else if (aantalVakjes == 8) {
            console.log("prijs van 16 euro");
        } else if (aantalVakjes == 6) {
            console.log("prijs van 12 euro");
        } else if (aantalVakjes == 4) {
            console.log("prijs van 8 euro");
        } else if (aantalVakjes == 2) {
            console.log("prijs van 4 euro");
        }
        else
            {
                alert("geen correct aantal vakjes ingegeven");
            }
        }
    }
    console.log(naam, "u mag deelnemen");
} else if (leeftijd >= 16) {
    console.log(naam, "geen deelname toestemming");
} else {
    console.log(naam, "geen");
}
dfdsfdfhjdsklfjdsjfmdmsfjkdf
dsfdsfsdfdsfdfsf