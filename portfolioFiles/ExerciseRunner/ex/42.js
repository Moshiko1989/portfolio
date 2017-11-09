'use strict'
console.log('Ex 42 Solution');

//Write a function startWithS that gets an array of names 
//and returns an array of names that start with S
//Refactor your function to work on any letter by adding a letter argument

function startWithS(names, letter) {
    var newArr = [];
    // console.log(names, letter);
    // console.log(names.length);
    for (var i = 0; i < names.length; i++) {
        // console.log (i);
       var name = names[i]
        // console.log(name);
        var letterZero = name.charAt(0);
        // console.log(letterZero);   
        if (letter === letterZero) {
            newArr.push(name);
            // console.log(newArr);
        }
    }
    return newArr;
}

var names = ['David', 'Steve', 'Sagiv', 'Moshe'];
console.log('initial arr: ', names);
var letter = 'S';
var letter2 = 'M';
var newArr = startWithS(names, letter2);
console.log('expected ann array with S names: ', newArr);
console.log('DONE!'); 
