'use strict'
console.log('Ex 22 Solution');

//Write the function myPow that gets 2 params: 
//base, exp and returns the power.
function myPow(base, exp){
    var curentNum =1;
    for(var i=0; i<exp; i++){
        curentNum = curentNum * base ; 
    } 
    return curentNum;
}
var pow = myPow(2,5);
console.log(pow);

//Math.sqrt();
//Math.pow();
