console.log('Ex 09 Solution');

/*Read 2 positive numbers and calculate the difference
(absolute value)
* if the diff is smaller from both values say that those 
numbers are relatively-close
* Validate that you got numbers
(hint: search for something like: javascript check if number)
*/ 
var numA = +prompt('Please enter first number:');
var numB = +prompt('Please enter second number:');


var diff = numA - numB;
var absDiff = Math.abs(diff);

if (absDiff < numA && absDiff < numB){
    console.log('Those  numbers are relatively-close');
}

if (isNaN(numA) && isNaN(numB)){
    console.log(
        'Please refresh the page, and enter positive numbers');
} else if (numA === 0 || numB === 0) {
    console.log(
        'Please refresh the page, and enter positive numbers');
} 