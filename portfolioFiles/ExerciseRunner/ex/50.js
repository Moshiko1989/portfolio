'use strict'
console.log('Ex 50 Solution');

//Object as a Map - Write a function countWordApperances(txt) 
//that return a map (object) in which the key is a word
//and the value is the count (how many times this word appeared in the text)


function countWordApperances(txt) {
    var comonWord = {};
    var splitTxt = txt.split(' ');
    // console.log('expected an arr with split words: ', splitTxt);
    for (var i = 0; i < splitTxt.length; i++) {
        var checkWord = splitTxt[i];
        // console.log('expected word idx i: ', checkWord);
        if (!comonWord[checkWord]) {
            comonWord[checkWord] = 1
        } else {
        // console.log('pre add: ', comonWord); 
        comonWord[checkWord] ++;
    }
        // console.log('post add', comonWord); 
    } 
    return comonWord;
}

var par = 'This cat is cat a is is This cat very cat good cat to cat keep cat an idiot cat occupaid' 
// console.log(par);
// console.log('expected obj: ', countWordApperances(par));
var newObj = countWordApperances(par);
console.log('answer: ', newObj);
console.log('DONE!')
