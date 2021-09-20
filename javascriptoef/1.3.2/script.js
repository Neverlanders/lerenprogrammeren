/*
 Jeschrijft 3 arrays.
 De eerste 2 arrays vuljemeteenlusopmetwaardenvan0tem10. 
  Dederdearrayvuljevervolgensopmetdedesomvandewaardeninarrays1en2. 
  Weergaveophetscherm: 
  1+1=2 
  2+2=4 
  3+3=6 
  4+4=8 
*/

var reeks1 = [];
var reeks2 = [];
let som = 0;
let teller = 0;

while(teller < 11){
	reeks1.push(teller);
	reeks2.push(teller);
	teller++;
}
teller=1;
while(teller <=10){
	som = reeks1[teller] + reeks2[teller];
	console.log(reeks1[teller], "+", reeks2[teller], "=", som);
	teller++;
}