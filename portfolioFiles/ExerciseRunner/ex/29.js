'use strict'
console.log('Ex 29 Solution');

//Read a number and:
var gInitNum = +prompt('Please tell me youre number: ', 'youre num');
console.log('The num is: ', gInitNum);
function getDigit(idx, num){
    var digit;
    var str = num + '';
    digit = str.charAt(idx);
    return +digit
}

// a) Calculate sum of its digits.
function calSumDig(num) {
    var str = num.toString();
    var length = str.length;
    var sum = 0;
    for(var i = 0; i < length; i++){
        sum += getDigit(i, num);
    } 
    return sum;
}
var sumDig = calSumDig(gInitNum);
console.log('digits sum: ', sumDig);
//console.log('expected: 14 ' + calSumDig(ginitNum));

// b) Calculate multiply of its digits.
function calMulDig(num) {
    var mult = 1;
    var str = num + '';
    var length = str.length;
    for(var i = 0; i < length; i++){
        mult = mult *  getDigit(i, num);
    }
    return mult;
}
var multDig = calMulDig(gInitNum);
console.log('digits mul: ', multDig);

// c) Print it with swapped first and last digits (2731 => 1732)
function swapDig(num){
   var str = num +'';
   var length = str.length;
   var strLeft = getDigit(0, num);
   var strRight = getDigit((length - 1), num);
   var strMid = str.slice(1, length-1);
   var strSwap = strRight + strMid + strLeft
   return strSwap;
   
}
var swap = swapDig(gInitNum);
console.log('swap: ', swap);

// d) Check if its symmetric (such as: 95459)
function checkSym(num){
    var str = num + '';                                         
    var length = str.length;           
    var isPerfect = false;
    
    for(var i = 0; i < parseInt(length/2); i++){                                              
        if(getDigit(i, gInitNum) === getDigit((length-1-i), gInitNum)) {
            isPerfect = true;
        } else {
            isPerfect = false;
            break;
        }             
    } 
    return isPerfect;
}
var perfect = checkSym(gInitNum);
console.log('is perfect?', perfect);

// e) Print its reverse (BONUS: as number not as string).
function doRev(num){
    var str = num + '';                                         
    var length = str.length; 
    var mirror = '';
    
    for(var i = length - 1; i >=0; i--){
        mirror += str[i]
    }
    return mirror;
}
var rev = doRev(gInitNum);
console.log('reverse: ', rev);

// f) Sum its first and last digit.
function getFirstLastSum(num){
    var str = num + '';
    var length = str.length; 
    var lastNum = str.charAt(length-1);
    var localFirstLast = parseInt(getDigit(0, num)) + parseInt(lastNum);

    return localFirstLast;
}
var firstLastSum = getFirstLastSum(gInitNum);
console.log('This is the sum of the first&last digit: ', firstLastSum);
