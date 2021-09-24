var reeks1=[1];
var reeks2=[1];
var product= 1;
var eindGetal = parseInt(prompt("Geef een eindGetal in:"));
for(i=1;i<=eindGetal;i++){
    if(product < eindGetal){
        product = product *2;
        reeks1.push(product);
        if(product + product <= eindGetal){
            reeks2.push(product + product);
        }
    }
}
console.log(reeks1);
console.log(reeks2);