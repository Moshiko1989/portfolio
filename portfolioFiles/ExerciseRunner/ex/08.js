console.log('Ex 08 Solution');

/*Read 3 numbers and print the smallest*/
var numA = +prompt('Please enter first number:');
var numB = +prompt('Please enter second number:');
var numC = +prompt('Please enter third number:');

if (numA<=numB && numA<=numC){
    console.log(numA);
} else if (numB<=numA && numB<=numC){
    console.log(numB);
} else {
    console.log(numC);
}
    