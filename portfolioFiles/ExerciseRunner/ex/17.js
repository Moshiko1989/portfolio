console.log('Ex 17 Solution');

// Write a function getBigger that receives 2 numbers 
// and returns the bigger.
function getBigger(x , y) {
    if (x <= y){
        return y;
    } else {
        return x;
    }
}

var num1 = +prompt('pls entr first num...');
var num2 = +prompt('pls entr second num...');
var writeBigger = getBigger(num1, num2);

console.log(writeBigger);