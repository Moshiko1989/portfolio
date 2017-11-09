console.log('Guess Me')
var gSecretNum = parseInt(Math.random() * 5 + 1);
console.log('global num: ', gSecretNum);
function guess() {
    var userGuess = +prompt('what is your number?');
    var elResult = document.querySelector('.result');
    console.log(elResult);
    if (userGuess < gSecretNum) {
        console.log('to low');
        elResult.innerText = 'to low';
        gSecretNum = parseInt(Math.random() * 5 + 1);
        console.log('global num: ', gSecretNum);
    }
    else if (userGuess > gSecretNum) {
        console.log('to high');
        elResult.innerText = 'to high';
        gSecretNum = parseInt(Math.random() * 5 + 1);
        console.log('global num: ', gSecretNum);
    }
    else {
        console.log('well done!');
        elResult.innerText = 'Well Done!';
        gSecretNum = parseInt(Math.random() * 5 + 1);
        console.log('global num: ', gSecretNum);
    }
}

