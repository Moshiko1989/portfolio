'use strict'
console.log('Ex 27 Solution');

//Write a program that generates 10 random numbers.
//The numbers should be generated so each number is 
//greater than the ones generated before. To simplify, 
//generate the first number n so it is between (0→1000), 
//and each subsequent number will be in the range of ( n → n+1000)
function genTenNum() {
    var min = parseInt(Math.random() * 1000);                       //434
    console.log('min: ' + min);                                     //434
    var max = 1000 + min;                                           //1434
    for (var i = 0; i < 5; i++) {
        var currentNum = min;                                       //434
        var newMax = max;
        min = parseInt(Math.random() * 1000)-currentNum;
        var newNum = parseInt(Math.random() * (newMax-currentNum));    
        console.log(newNum);
        min = newNum;   
        newMax = newMax-newNum;                                               
    }
}
genTenNum();


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}





// var currNum = 0;
// var diff = 1000; 
// for( var i = 0; i < 10; i++){
//     diff = parseInt( Math.random() * diff);
//     currNum += diff
//     console.log(currNum, 'currN');
//     console.log(diff, ' diff')

// }



