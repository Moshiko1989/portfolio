'use strict'
console.log('Ex 41 Solution');

//Write a function sayNum(num) that prints each digit in words.
//For example:
//123 => One Two Three.
//7294 => Seven Two Nine Four.
//TIP: You may use Switch inside a loop OR an array digitNames.
// What the heck, try them both.
function sayNum1(num) {
    var numStr = num + '';
    var numLoop = num + '';
    var numListt = '';
    for (var i = 0; i < numLoop.length; i++) {
        var cutNum = numStr.charAt(0);
        // console.log('expected left num: ', cutNum);
        var newNum = numStr.substring(1, numStr.length);
        // console.log('expected 5784: ', newNum);
        numStr = newNum;
        switch (parseInt(cutNum)) {
            case 0:
                numName = 'Zero'
                break;
            case 1:
                numName = 'One'
                break;
            case 2:
                numName = 'Two'
                break;
            case 3:
                numName = 'Three'
                break;
            case 4:
                numName = 'Four'
                break;
            case 5:
                numName = 'Five'
                break;
            case 6:
                numName = 'Six'
                break;
            case 7:
                numName = 'Seven'
                break;
            case 8:
                numName = 'Eight'
                break;
            case 9:
                numName = 'Nine'
                break;
        }
        // console.log('expected num 0-9 name: ', numName);
        numListt += numName + ' ';
    }    
    return numListt;
    
}
var someNum = 23200;
var numsInWordWithSwitch = sayNum1(someNum)
console.log('Our num: ', someNum);
console.log('Expecred nums as a sentence by switch: ', numsInWordWithSwitch, '.');

function sayNum2(num) {
    var numStr = num  + '';
    var digitNames = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']; 
    var numInNumber = '';
    var powTen = Math.pow(10, numStr.length-1);
    for (var i = 0; i < numStr.length; i++) {
        var leftNum = parseInt(numStr.charAt(i));
        // console.log('expected digits from left to right: ', leftNum);
        numInNumber += digitNames[leftNum] + ' ';
        // console.log(numInNumber);
    }
    return numInNumber;
}

var numsInWordWithArr = sayNum2(someNum)
console.log('Our num: ', someNum);
console.log('Expecred nums as a sentence by ann array: ', numsInWordWithArr, '.');
console.log('DONE!'); 

