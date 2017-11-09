'use strict';
console.log('Ex 1');

//Read first name and last name, also create a variable fullName,
//and then welcome the user by his full name.
var fullName = prompt('Please enter youre full name:');

if (fullName === '') {
    prompt('Please enter youre full name:');
}
alert('Welcome ' + fullName +' :)' );   