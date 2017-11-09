'use strict'
console.log('Ex 37 Solution');

//Write a function biggerThan100 that gets an array of nums 
//and returns an array of items that are bigger than 100.
function genrateArr(){
    var arr = [];
    var itemsCount = parseInt(Math.random() * 10);
        for (var i = 0; i < itemsCount; i++){
            arr.push(parseInt(Math.random() * 200));
        }
        // console.log('expected arr: ', arr);
        return arr;
}

var arr = genrateArr();
console.log('expected random arr: ', arr);


function biggerThan100(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        // console.log('expected zero to length -1: ', i);
        if (arr[i] > 100) {
        newArr.push(arr[i]);
        }
    }
    // console.log('expected new arr',newArr)    
    return newArr;
}

var biggerThan100Arr = biggerThan100(arr);
console.log('expected bigger than 100 arr: ', biggerThan100Arr);

console.log('DONE!');

