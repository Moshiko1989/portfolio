'use strict'
console.log('Ex 24 Solution');

//Write the function factorial that gets a number n and return n!
// function getFactorial(n){
function getFactorial(n){
    var res = 1;
    for(var i = 2 ; i <= n ; i++ ) {
        res = res * i;
    }
    console.log(res);
}

getFactorial(10);







