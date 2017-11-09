'use strict'
console.log('Ex 30 Solution');

//Read 2 names and print the longer one
var name1 = prompt('Please enter name 1: ');
console.log('name1: ', name1);

var name2 = prompt('Please enter name 2: ');
console.log('name2: ', name2);

function checkLength(name1, name2){
    if      ((name1 || name2) === null)     console.log('you did not enter numbers...');
    if      (name1.length > name2.length)   console.log('Longer name is: ', name1);
    else if (name2.length > name1.length)   console.log('Longer name is: ', name2);
    else                                    console.log('Al tatkil stam!');
}

var names = checkLength(name1, name2);
console.log('DONE!');
