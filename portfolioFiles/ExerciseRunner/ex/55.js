'use strict'
console.log('Ex 55 Solution');

/*
Write a function findMode(mat) 
that will find and print the number that 
occurs most times in a 2d array.
BONUS: If there are ties (e.g.: 
both 47 and 53 appeared 17 times), 
print all (TIP: use an object as a coutMap)
*/

var randomMat = geneMatrix();
console.table(randomMat);

var mostCom = findMode(randomMat);
console.log('most commons: ', mostCom);

function geneMatrix() {
    var dimentionRange = 3; //parseInt(Math.random() * 10);
    var matrix = [];

    for (var i = 0; i < dimentionRange; i++) {
        var row = []
        for (var j = 0; j < dimentionRange; j++) {
            row[j] = parseInt(Math.random() * 4);
        }
        matrix.push(row);
    }
    return matrix;
}

function findMode(mat) {
    var map = {};
    var items = [];
    for (var i = 0; i < mat.length; i++) {
        for (var j = 0; j < mat.length; j++) {
            if (!map[mat[i][j]]) {
                map[mat[i][j]] = 0;
            }
            map[mat[i][j]]++;
        }
    }

    var maxes = []
    var repeat = 0;
    for (var i in map) {
        if (map[i] > repeat) {
            repeat = map[i];
        }
    }

    for (var i in map) {
        if (map[i] === repeat) {
            var most = i;
            maxes.push(parseInt(i));
        }
    }
    // console.log('map: ', map);
    console.log('repeats of most common: ', repeat);
    // console.log('maxes: ', maxes);
    return maxes;
}

console.log('DONE!');