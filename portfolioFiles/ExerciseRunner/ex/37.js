'use strict'
console.log('Ex 37 Solution');

//Write a function: 
//generatePass(passLength) that generates a password of a specified length. 
//Password is made out of random single- digit numbers.

function generatePass(passLength) {
    var passWordStr = '';
    for (var i = 0; i < passLength; i++) {
        var newDigit = parseInt(Math.random() * 10);
        console.log('expected str num' , newDigit);
        passWordStr += parseInt(newDigit);
    }    
    return passWordStr;
    // parseInt(passWordStr);
}

var newPassWord = generatePass(4);
console.log('expected 4 digits code: ', newPassWord);

// console.log(parseInt('0123'));