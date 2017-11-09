'use strict'
console.log('Ex 57 Solution');
/*
symetric matrix:
*/

var gMatrix1 =   [
                   [3, 2, 5],
                   [2, 5, 4],
                   [5, 4, 7]
                            ];

var gMatrix2 =  [[]];

var isSymetrix = checkIsSymetrix(gMatrix1);
console.log('is symetrix? ', isSymetrix);

function checkIsSymetrix(mat) {
    var isSymetrix = true;
    for (var i = 0; i < mat.length; i++) {
        for (var j = i; j < mat.length; j++) {
            if (mat[i][j] !== mat[j][i]) {
                isSymetrix = false;
                break;
            }
        }
    }
    return isSymetrix;
}


console.log('DONE!');



// function checkIsSymetrix(mat) {
//     var isSymetrix = true;
//     for (var i = 0; i < mat.length; i++) {
//         console.log('i: ', i);        
//         if (i = 0 && (mat[i][mat.length - 1] !== mat[mat.length - 1][i])) {
//             isSymetrix = false;
//             break;
//         }
//         if (i > 0 && (mat[i][mat.length - i] !== mat[mat.length - i][i])) {
//             isSymetrix = false;
//             break;
//         }
//     }
//     return isSymetrix;
// }