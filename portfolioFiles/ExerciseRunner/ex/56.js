'use strict'
console.log('Ex 56 Solution');
/*
Write a function that gets a 2d array and checks if it is a magic square:
    * it must be square,
    * Rows' sums, columns' sums, and the two diagonals sums
        should be equal.
*/
var gMatrix1 =  [[2, 7, 6],
                 [9, 5, 1],
                 [4, 3, 8]];

var gMatrix2 =  [[1, 15, 14, 4],
                 [12, 6, 7, 9],
                 [8, 10, 11, 5],
                 [13, 3, 2, 16]];

var isMagicSquare1 = isMagic(gMatrix1);
var isMagicSquare2 = isMagic(gMatrix2);
console.log('is magic matrix 1? ', isMagicSquare1);
console.log('is magic matrix 2? ', isMagicSquare2);

function isSquare(mat) {
    var rowsSize = 0;
    var isSquare = true;
    for (var i = 0; i < mat.length; i++) {
        var rowsSize = mat[i].length;
        if (i > 0 && rowsSize !== mat[i - 1].length) {
            isSquare = false;
            break;
        }
    }
    if (mat.length !== rowsSize) {
        isSquare = false;
    }
    return isSquare;
}


function isMagic(mat) {
    var refSum = null;
    var isMagic = true;
    var sumOfRow = 0;
    var sumOfCol = 0;
    var sumOfCDiago1 = 0;
    var sumOfCDiago2 = 0;
    if (isSquare(mat)) {
        for (var i = 0; i < mat.length; i++) {
            for (var j = 0; j < mat.length; j++) {
                sumOfRow += mat[i][j];
                sumOfCol += mat[j][i];
                if (i === j) sumOfCDiago1 += mat[i][j];
                if (mat.length - 1 === i + j) sumOfCDiago2 += mat[i][j];
            }
            if (refSum === null) refSum = sumOfRow;
            if (sumOfRow !== refSum || sumOfCol !== refSum) {
                isMagic = false;
                break;
            }
            sumOfRow = 0;
            sumOfCol = 0;
        }
        if (sumOfCDiago1 !== refSum || sumOfCDiago2 !== refSum) {
            isMagic = false;
        }
    } else isMagic = false;
    return isMagic;
}

console.log('DONE!');

