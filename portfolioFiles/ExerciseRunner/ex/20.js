'use strict'
console.log('Ex 20 Solution');

//Read 10 numbers and print:
//* The maximum number
//* The minimum number
//* The average
var count = 0;
var userNumSum = 0;
var max = -Infinity;
var min = Infinity;

for(i=0; i<10; i++) {
    var num = +prompt('Please enter num: ')
    userNumSum = userNumSum + num;
    if (num > max) max = num;
    if (num < min) min = num;
}

var userNumAvr = userNumSum / 10

console.log('The average number is: ' + userNumAvr);
console.log('The maximum number is: ' + max);
console.log('The minimum number is: ' + min);