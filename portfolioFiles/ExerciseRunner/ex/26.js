'use strict'
console.log('Ex 26 Solution');

//Let the user guess a random number your program set, 
//help the user by outputting Too Low or Too High.
function play(){
    var rand = parseInt(Math.random()*10);
    console.log(rand);
    var userInput = +prompt('Please guess a num: ', 'youre num...?')
    while (userInput !== rand) { 
        if (userInput < rand)       console.log('Too low :(');
        else if (userInput > rand)  console.log('Too high');
        else                        console.log('not a number'); 
        userInput = +prompt('Please guess a num: ', 'youre num...?')
    }
    alert('Win!!!!!!!');
    var rePlay = confirm('Play Again?');
    if (rePlay) play(); 
}
play();


