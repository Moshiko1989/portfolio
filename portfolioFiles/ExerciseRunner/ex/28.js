'use strict'
console.log('Ex 28 Solution');

// Write a program to compute the greatest common divisor 
// (GCD) of two positive integers.
// var input1 = +prompt('a');
// var input2 = +prompt('b');

function compGCD(num1, num2) {
    var smallNum = num1
    if(num2 < num1) {
        smallNum = num2;
    } 
    var GCD = 999;
    for (var i = 0; i <= smallNum; i++) {
        if(num1 % i === 0 && num2 % i === 0) {
            GCD = i;
        }
    }
    return GCD
}

console.log('expected to be 10, :' + compGCD(20, 30));
//Toda le Elad!!!



 
