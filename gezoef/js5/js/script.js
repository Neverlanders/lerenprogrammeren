// FOR LOOP
/*for(teller;conditie;wijziging (teller)){
    code
}*/
/*var i = 1;
for(i;i<=10;i++){
    console.log(i);
}
i = 1;
var x = 0;
for(i;i<=10;x){
    console.log(x);
    x = x + 2;
    i++;
}

for(i;i<=10;i+=2){
    console.log(i)
}
i=10
for(i;i>=1;i--){
    console.log(i);
}*/

var text = "";
var i = 0;
while(i < 10){
    text = text + "<br>De nummers zijn " +i;
    i++;
}
document.getElementById("demo").innerHTML =text;

