// ******************************************************************
// CR: 16-10-2017 by Yaron
// ******************************************************************


'use strict'
console.log('Ex 21 Solution');

//Read numbers, until the number 999 is entered.
//For each number:
//* Print if it’s divided by 3
//* Print whether this num is much bigger (more than 10) than
//  the previous number.

var num;
// CR: prevNum is fine
var previousNum;
// CR: missing spaces
while (num !== 999){
    // CR: wrong ZAKIF loop! 999 is handeled as normal num
    num = +prompt('Please enter a number');
    if (num % 3 === 0){
        console.log(num + ' divides by 3');
    }
    if (num - previousNum > 10) {
        console.log('This number is way bigger than the last...');
    }
    previousNum = num;
}

