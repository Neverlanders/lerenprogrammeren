/*
 Jeschrijft3arrays.
 Deeerste2arraysvuljemeteenlusopmettelkens11willekeurigeintelezengetallen. 
  Dederdearrayvuljevervolgensopmetdedesomvandewaardeninarrays1en2. 
  Weergaveophetscherm(voorbeeld): 
  3+2=5 
  1+1=2 
  2+100=102 
  3+4=7 
  900+4=904
*/
var reeks1=[];
var reeks2=[];
var reeks3=[];
var x=0;

maxGetal = parseInt(prompt('Geef een maximum in:'));
while(x <= 11){
	reeks1.push(Math.floor(Math.random() * (maxGetal - 0 + 1) ) + 0); //random getal tussen 0 en maximum
	reeks2.push(Math.floor(Math.random() * (maxGetal - 0 + 1) ) + 0); //random getal tussen 0 en maximum
	reeks3.push(parseInt(reeks1[x] + reeks2[x]));
	console.log(reeks1[x], ' + ', reeks2[x], ' = ', reeks3[x] + '<br>');
	x++;
}
