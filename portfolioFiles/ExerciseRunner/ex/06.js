console.log('Ex 06 Solution');

/*Read a, b, c from the user, (for example: 2, -5, 2)
your output should be something like:
2x2– 5x + 2 = 0
x1 = 2 ; x2 = 0.5
For being able to print the x2 (X Baribua...) 
to the console searchgoogle for: “unicode exponent two 
“and just copy the character to your IDE*/

var a = +prompt('Please enter first number:');
var b = +prompt('Please enter second number:');
var c = +prompt('Please enter third number:');

var sqrRoot = Math.sqrt(b*b -4*a*c);
var answer1 = (- b + sqrRoot) / (2*a);
var answer2 = (- b - sqrRoot) / (2*a);

console.log(a + 'x' + '\u00B2 ' + b + ' + ' + c + '= 0');
console.log(answer1);
console.log(answer2);
