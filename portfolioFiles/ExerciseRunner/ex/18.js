console.log('Ex 18 Solution');

//Write a function: isOfAge that gets a name and an age, 
//if the user is younger than eighteen, 
//alert him that he is too young, 
//this function also returns a boolean
var userName = prompt('Please enter youre name: ');
var userAge = prompt('Please enter youre age: ');

function isOfAge(name , age) {
    if (age < 18){
        return false;
    } else {
        return true;
    }
}

var age = isOfAge(userName, userAge);

if (!age){
    alert(userName + ' is too young!');
} else {
    alert('Sababa');
}