console.log('Ex 16 Solution');

//Write a function isEven that gets a number, 
//and returns true if the number is even otherwise false.

function isEven(a){
    if (a % 2 === 0){
        return true;
    } else{
        return false;
    }
}

var userNum = prompt('Please enter number: ');
var isEvenVar = isEven(userNum);

console.log(isEvenVar);