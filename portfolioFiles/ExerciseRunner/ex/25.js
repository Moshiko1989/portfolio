'use strict'
console.log('Ex 25 Solution');

//Write a function that prints the multiplication table
function getMultiTable(){
    var str = '';
    for(var i = 1; i<=10; i++){
        for(var j =1; j<=10; j++){
            str = str + (i*j) + '\t';
        }
        str = str + '\n';
    }
    console.log(str);
}

getMultiTable();
// I must say that I looked over someone elses code, 
//but I rewrote it twice without looking.
