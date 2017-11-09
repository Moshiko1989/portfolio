'use strict'
console.log('Ex 53 Solution');

var airPort = {
    planes: [plane1, plane2],
    flights: [flight1, flight2],
    passengers: [passenger1, passenger2, passenger3, passenger4, passenger5]
};
// console.log('air port: ', airPort);
var plane1 = {
    seatCount: 3,
    flights: [flight1],
    passengers: [passenger1, passenger2, passenger5]
};

var plane2 = {
    seatCount: 3,
    flights: [flight2, flight3],
    passengers: [passenger3, passenger4]
};

var passenger1 = {
    id: parseInt(Math.random() * 1000000),
    fullName: 'Jim',
    planes: [plane1],
    flights: [flight1]
};

var passenger2 = {
    id: parseInt(Math.random() * 1000000),
    fullName: 'Jon',
    planes: [plane1],
    flights: [flight1]
};

var passenger3 = {
    id: parseInt(Math.random() * 1000000),
    fullName: 'Greg',
    planes: [plane2],
    flights: [flight2, flight3]
};

var passenger4 = {
    id: parseInt(Math.random() * 1000000),
    fullName: 'Noa',
    planes: [plane2],
    flights: [flight2]
};

var passenger5 = {
    id: parseInt(Math.random() * 1000000),
    fullName: 'Bill',
    planes: [plane1],
    flights: [flight1]
};

var flight1 = {
    at: new Date,
    src: 'sde dov',
    dest: 'eilat',
    plane: plane1,
    passengers: [passenger1, passenger2, passenger5]
}

var flight2 = {
    at: new Date,
    src: 'eilat',
    dest: 'sde dov',
    plane: plane2,
    passengers: [passenger3, passenger4]
}

var flight3 = {
    at: new Date,
    src: 'sde dov',
    dest: 'berlin',
    plane: plane2,
    passengers: [passenger3]
}

// Write functions:
// i. isFlightFullyBooked(flight)
function isFlightFullyBooked(flight) {
    var isFullyBooked = false;
    if (flight.plane.seatCount <= flight.passengers.length) {
        isFullyBooked = true;
    }
    
    return isFullyBooked;
} 
console.log('is flight 1 fully booked? ', isFlightFullyBooked(flight1));
console.log('is flight 2 fully booked? ', isFlightFullyBooked(flight2));
console.log('is flight 3 fully booked? ', isFlightFullyBooked(flight3));

// ii. getFrequentFlyers () – returns the passengers with
// maximal flights count
function getFrequentFlyers(inputs) {
    var frequnts = [];
    var flightsOfPassenger = 0;
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].flights.length > flightsOfPassenger) {
            flightsOfPassenger = inputs[i].flights.length;
            // console.log('inputs[i]: ', inputs[i]);
        } 
    }
    for (var i = 0; i < inputs.length; i++) {
        if (flightsOfPassenger === inputs[i].flights.length) {
            frequnts.push(inputs[i])
        }
    }
    // console.log('arr of most frequnt: ', frequnts); 
    return frequnts;
}
getFrequentFlyers(passengers);
// console.log('arr of most frequnt: ', mostFrequents);
var passengers = [passenger1, passenger2, passenger3, passenger4, passenger5];
var planes = [plane1, plane2];
var flights = [flight1, flight2, flight3];
// console.log('air port: ', airPort);
var mostFrequents = getFrequentFlyers(passengers);
console.log('arr of most frequnt: ', mostFrequents);
console.log('DONE!')

 
        
        