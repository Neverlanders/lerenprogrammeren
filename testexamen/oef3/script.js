var eindGetal = parseInt(prompt("Geef een eindGetal in:"));
var totaal = 2;
var resultaat=""
for(i=1;i<=eindGetal;i++){
    if(i%2!==0){
        totaal = totaal - i;
        resultaat = resultaat + i + "+";
    }else{
        totaal = totaal + i;
        resultaat = resultaat + i + "-";
    }
}
console.log(resultaat.substring(0,resultaat.length-1) + " = " + totaal);