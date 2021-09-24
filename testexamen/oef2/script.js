var beginGetal = parseInt(prompt("Geef een begingetal:"));
var eindGetal = parseInt(prompt("Geef een eindgetal:"));
var resultaat = "";
var hulpGetal = 1;
for(i=beginGetal;i<=eindGetal;i++){
    hulpGetal = hulpGetal * i;
    resultaat = resultaat + i + "*";
}
console.log(resultaat.substring(0,resultaat.length-1) + " = " + hulpGetal);