'use strict'
console.log('Ex 19 Solution');

//Read 10 numbers from the users and output 
//"the number is even" if this is the case, 
//else "the number is not even"

var count = 0;

while (count < 10){
    var userNum = prompt('Please enter anumber: ') 
    if (userNum % 2 === 0){
        alert('the number is even');
        count++
    } else {
        alert('the number is not even');
        count++
    }
}