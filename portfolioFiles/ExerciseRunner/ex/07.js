console.log('Ex 07 Solution');

/*Read 3 numbers and check if the 3rd is the sum of
the first two, if so,
print all numbers to the console like this: 6 + 4 = 10*/

var numA = +prompt('Please enter first number:');
var numB = +prompt('Please enter second number:');
var numC = +prompt('Please enter third number:');

if (numC === numA+numB){
    console.log(numA + '+' + numB + '=' + numC + ' :-)');
} else {
    console.log('error');
}
