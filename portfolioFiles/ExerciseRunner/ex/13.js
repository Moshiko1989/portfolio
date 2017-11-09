console.log('Ex 13 Solution');

var currentFloor = 0;
var userFloor =  +prompt('Enter floor...');
if (userFloor < -2 || userFloor > 4){
    alert('wrong input')

} else {
    currentFloor = userFloor
    // console.log(currentFloor, userFloor);
    if (userFloor === 0){
        alert('Bye Bye');
    } else if (userFloor === (-2)){
        alert('Drive Safely')
    }
}
