console.log('Ex 10 Solution');

/*Ask the user how many friends he has on 
FB and print out an analysis: 
* More than 500 – OMG, celebrity!
* More than 300 (and up to 500) – Well conWnected! 
* 100 and more – Knows some people
* Up to 100 – Quite picky aren't you?
* 0 – Lets be friends?
*/ 

var friendsFB = +prompt('How many friends do u have on FB?');
if (friendsFB === 0) {
    console.log('Lets be friends?');

} else if (friendsFB <= 100){
    console.log('Quite picky aren'+"'"+'t you?');

} else if(friendsFB>100) {
    console.log('Knows some people');

} 
if (friendsFB>=300 && friendsFB<500){
    console.log('Well conWnected!');

} else if (friendsFB>=500){
    console.log('OMG, celebrity!');
}