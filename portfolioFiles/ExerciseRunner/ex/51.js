'use strict'
console.log('Ex 51 Solution');
/*Monsters*/
// o Create a monsters array with 4 monsters 
/*  o Each monster should also have
         id – a unique sequential number 
         name – read from user
         power (random 1-100)*/
function creatMonsters() {
    var monsters = [];
        for (var i = 0; i < 4; i++) {
            var currMonster = {};
            currMonster.id = i+1;
            var monsterName = prompt('Please enter a monster name: ');
            currMonster.name = monsterName;
            var monsterPower = parseInt(Math.random() * 100);
            currMonster.power = monsterPower;
            monsters.push(currMonster);
        }
        return monsters;
}

var gMonsters = creatMonsters();
console.log('expected arr of Monsters objs: ', gMonsters);
// console.log('expected prop "power" in obj in idx 0 in arr', monsters[0].power);
       
/* o Write the function: findMostPowerful(monsters)*/
function findMostPowerful(monsters) {
    var powerCount = -Infinity;
        for (var i = 0; i < monsters.length; i++) {
            // console.log('expected objs in arr', monsters[i])
            var currPower = monsters[i].power;
            // console.log('expected prop "power" in obj in idx i', power);
            if (currPower > powerCount) {
                powerCount = currPower
                var mostPowerful = monsters[i];
            }
        }
        console.log('expected power of most powerfull', powerCount);
        // console.log('expected most powerfull', mostPowerful);
    return mostPowerful;
}
var mostPowerful = findMostPowerful(gMonsters);
// console.log('expected most powerfull obj in arr', mostPowerful);

/*  o Write the function: breedMonsters(monster1, monster2)
      the function returns a new monster where power is an average, 
      and name is a mix – half parent1, half parent2*/
function breedMonsters(monster1, monster2) {
    var breed = {};
    var power1 = monster1.power;
    var power2 = monster2.power;
    // console.log('expected power 1: ', power1, ' expected power 2: ', power2);
    breed.power = (power1 + power2) / 2;
    // console.log('expected breed power: ', breed.power);
    var name1 = monster1.name;
    var name2 = monster2.name;
    // console.log('expected name 1: ', name1, ' expected name 2: ', name2);
    var name1Length = name1.length;
    var name2Length = name2.length; 
    var halfName1 = name1.slice(0, ((name1.length/2) ));
    // console.log('expected half name 1: ', halfName1);
    var halfName2 = name2.slice(name2.length/2, name2.length);
    // console.log('expected half name 2: ', halfName2);
    breed.name = halfName1 + halfName2;
    // console.log('expected breed name: ', breed.name);
    return breed;
}

var breed = breedMonsters(gMonsters[0], gMonsters[1]);
console.log('expected breed: ', breed);
console.log('Done!')


