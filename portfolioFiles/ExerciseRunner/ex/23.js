'use strict'
console.log('Ex 23 Solution');

//Write a function getAsterisks which gets a number, and returns a string
//containing asterisks according the number supplied.
//*Write a program that prints in the first line 1 asterisk, 
// in the second 2 asterisk and so on until 10
//*After reaching a line with 10 asterisks, 
// it goes backwards until a line with 1 asterisk
//*There is a new requirement to support any character 
// (not necessarily asterisk), refactor your code, 
// the character will be read from the user and be sent to the function.
//* Use Math.rand to generate a number between 1 and 10 
// and use it to draw asterisks rows at random lengths

function getAsterisks(size,char) {
    var str = '';
    for(var i=0; i < size; i++) {
        str = str + char;
    }
    return str;
}

function getTriangle(size,char){
    printFirstHalf(size,char);
    console.log(getAsterisks(size + 1 ,char));
    printSecondHalf(size,char);
}

function printSecondHalf(size,char){
    for(var i = size; i>=1; i--){
        console.log(getAsterisks(i,char));
    }
}

function printFirstHalf(size,char){
    for(var i = 1; i<=size; i++){
        console.log(getAsterisks(i,char));        
    } 
}
// var userChar = prompt('press a charecter: ');

//getTriangle(10,userChar);

// var rand = parseInt(Math.random()*10);
// console.log(rand);

for(var i = 0; i < 100; i++){
    var rand = parseInt(Math.random()*10);
    console.log(getAsterisks(rand,'*'));
}
 