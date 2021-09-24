var zin=prompt("Geef een zin in: ");
var welkeLetters=prompt("Welke letters wil je veranderen");
var vervangLetters=prompt("In welke karakters wens je deze te veranderen");
var resultaat ="";
var letterReeks=welkeLetters.split(',');
var vervangReeks=vervangLetters.split(',');
for(i=0;i<zin.length;i++){
    var mijnKarakter = zin.substring(i,i+1);
    if (letterReeks.indexOf(mijnKarakter) >= 0){
        resultaat+=vervangReeks[letterReeks.indexOf(mijnKarakter)];
    }
    else
        resultaat+=mijnKarakter;
}
console.log("Resultaat:" + resultaat);
