var zin = prompt("Geef een zin in:");
var aantalWoorden = 0;
var aantalKarakters= 0;
for(i=1;i<=zin.length;i++){
    if(zin.substring(i,i+1)==" "){

        aantalWoorden++;
    }
}
aantalKarakters = parseInt(zin.length)- aantalWoorden;
aantalWoorden = aantalWoorden+1;
console.log("Aantal karakters:" + aantalKarakters);
console.log("Aantal woorden:" + aantalWoorden);