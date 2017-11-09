'use strict'
console.log('Ex 40 Solution');
//Write a function: getLoremIpsum(wordsCount) 
//that return a sentence with made-up words (google for: lorem ipsum...)
//TIP, here are the steps you may use to get there:
// * first write a function getWord that returns a single 
//   word with random letters and size 3
//   Tip: you can create a string or an array of all the characters in english.
// * Now change the size to be a random number between 3-5.
// * Now call this function in a loop to create a sentence.

// This 
function getLoremIpsum(wordsCount) {
    function makeid(possible) {
        var text = '';
        var optionNum = parseInt(Math.random() * 6);
        // console.log('expected str length: ', optionNum)
        while (optionNum < 3) {
            optionNum = parseInt(Math.random() * 5);
        }
        // console.log('expected str length: ', optionNum)
        for (var i = 0; i < optionNum; i++){
            text += possible.charAt(Math.floor(Math.random() * possible.length));
            // console.log('expected i: ', i)
        }
        return text;
      }
    

    
    var newSentence = '';
    for (var i = 0; i < wordsCount; i++) {
        newSentence += ' ' + makeid('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');
        // console.log('expected new word: ', newWord);
    }
    return newSentence;
}

var newSentence = getLoremIpsum(6);
console.log('expected new sentence with word counts = its input: ', newSentence);
console.log('DONE!'); 