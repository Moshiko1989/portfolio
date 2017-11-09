'use strict'
console.log('Ex 37 Solution');

//Write a function countVotes(votes, candidateName)
//that counts how many votes this candidate got.
//i.e.: if the votes array looks like this: ['c1', 'c1', 'c2', 'c1']
//And the candidateName is : 'c2', the function returns 1.

//This function generates a string in the random length and values, from its input.
function makeid(possible) {
    var text = '';
    var optionNum = parseInt(Math.random() * 1000);
    // console.log('expected str length: ', optionNum)

    for (var i = 0; i < optionNum; i++){
        text += possible.charAt(Math.floor(Math.random() * possible.length));
        // console.log('expected i: ', i)
    }
    return text;
  }
  
var longChar = makeid('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789');
console.log('char: ', longChar);

//This function generates an array from its input.
function genrateArr(str){
    var arr = [];
    // var itemsCount = parseInt(Math.random() * char.length);
    var itemsCount = str.length;
        for (var i = 0; i < itemsCount; i++){
            arr.push(str[i]);
            // console.log('expected accend rand car arr: ', arr);
        }
        return arr;
}
var arr = genrateArr(longChar);
// console.log('expected random arr: ', arr);

var arrayOfCandidate = arr;

//This function takes an array and and a possible part of it, and counts the times the //spcific part repeats itself.
function countVotes(votes, candidateName) {
    var voteCount = 0;
    // console.log('expected arr length', votes.length);
    for (var i = 0; i < votes.length; i++) {
        // console.log('nums of loops in count: ', i);
        // console.log('votes index: ', votes[i]);
        // console.log('expected: w ', candidateName);
        if (votes[i] === candidateName) {
            // console.log('seperate line');
            // console.log('votes index: ', votes[i]);
            // console.log('expected: w ', candidateName);
            voteCount += 1;
            // console.log('votes count:', voteCount);
        }
    }
    return voteCount;
}
console.log('expected votes toal count: ', countVotes(arrayOfCandidate, 'w'));
console.log('DONE!'); 