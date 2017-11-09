'use strict'
console.log('Ex 54 Solution');

/* 
54.Fill up a 2d array with random numbers in a specified range. 
*/
function geneMatrix() {
    var dimentionRange = 3; //parseInt(Math.random() * 10);
    var matrix =[];

    for (var i = 0; i < dimentionRange; i++) {
        var row = []
        for (var j = 0; j < dimentionRange; j++) {
            row[j] = parseInt(Math.random() * 4);
        }
        matrix.push(row);
    }
    return matrix;
}
var randomMat = geneMatrix();
console.table(randomMat);

// Create the following functions: 


// sumCol(mat, colIdx)
function sumCol(mat, colIdx) {
    var sumCol = 0;
    for (var i = 0; i < mat[0].length; i++) {
        sumCol += mat[i][colIdx]; 
        // console.log('mat[colIdx].length: ', mat[colIdx].length);
        // console.log('looking for cols: ', sumCol);
    }    
    return sumCol;
}
var colSum = sumCol(randomMat, 2);
console.log('the sum of the col is: ', colSum);

// sumRow(mat, rowIdx)
function sumRow(mat, rowIdx) {
    var sumRow = 0;
    for (var i = 0; i < mat[0].length; i++) {
        sumRow += mat[rowIdx][i];
    }
    return sumRow;
}
var rowSum = sumRow(randomMat, 2);
console.log('the sum of the row is: ', rowSum);

//  findMax(mat ,colIdx) 
function findMax(mat ,colIdx) {
    var max = 0;
    for (var i = 0; i < mat[0].length; i++) {
        if (mat[i][colIdx] > max) {
            max = mat[i][colIdx];  
        } 
    }
    return max;
}
var maxVal = findMax(randomMat, 1);
console.log('max is: ', maxVal);

//  findAvg(mat)
function findAvg(mat) {
    var sum = 0;
    for (var i = 0; i < mat[0].length; i++) {  
        for (var j = 0; j < mat[0].length; j++) {
            sum += mat[i][j]
            }
    }
    console.log('sum: ', sum)
    console.log('size: ', mat[0].length * mat[0].length)
    var avg = sum / (mat[0].length * mat[0].length);
    return avg;
}
var avg = findAvg(randomMat);
console.log('avg is: ', avg);


console.log('DONE!');
