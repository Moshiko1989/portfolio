console.log('Ex 02 Solution');

//Read two numbers and print the result of the following
// operations on them: (*, /, %)
var num1 = +prompt('Please enter youre first number:');
var num2 = +prompt('Please enter youre second number:');

var resultMulti = num1 * num2
var resultDiv = num1 / num2
var resultModu = num1 % num2

console.log(num1 + ' * ' + num2 + ' = ' + resultMulti); 

if (num2 === 0){
    console.log('Canot divide by Zero :(')

} else {
    console.log(num1 + ' / ' + num2 + ' = ' + resultDiv);
}

console.log(num1 + ' % ' + num2 + ' = ' + resultModu);