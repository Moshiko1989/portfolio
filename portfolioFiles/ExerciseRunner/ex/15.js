console.log('Ex 15 Solution');

/*Write a function that gets 2 numbers and return their sum*/ 
function getSum(a,b){
    sum = a + b;
    return sum;
}

var num1 = +prompt('pls entr first num...');
var num2 = +prompt('pls entr second num...');
var finalSum = getSum(num1,num2);
console.log(finalSum);