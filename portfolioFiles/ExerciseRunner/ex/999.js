console.log('08-sparseMat');

// var learnMats =  [[1, 2, 3, 4], 
//                 [2, 8, 4, 9], 
//                 [3, 6, 9, 12], 
//                 [4, 8 ,12, 16]];

// console.table(learnMat);
// console.table(learnMat[2][1]);

// var expects =  

var valsNum = 4
var vals = [15, 25, 8, 9];

var rows = [4, 3, 2, 0];
var cols = [4, 2, 2, 3];

function regenerateSparseMat(n, vals, rowIdxs, colIdxs) {
    var regeneMat = [];
    for (var i = 0; i < rowIdxs.length+1; i++) {
        var row = [];
            for (var j = 0; j < cols.length+1; j++) {
               row[j] = 0; 
            }
            regeneMat.push(row);
    }

    for (var i = 0; i < n; i++) {
        regeneMat[rowIdxs[i]][colIdxs[i]] = vals[i];
        // console.log('i: ', i)
        // console.log('regeneMat: ', regeneMat);
    }
    return regeneMat;
}

var regeneMat = regenerateSparseMat(valsNum, vals, rows, cols);
console.log('expected regenerated mat: ', regeneMat);
console.table(regeneMat);

console.log('DONE!');































// var gMat = [[6, 4, 2],[33, 17, 19]];

// // sparse mat is a square N*N mat
// // less than 20% none-zeros
// // in each row at most 2 none-zeros
// function isSparse(mat) {
//     var matIsSparse = mat.length === mat[0].length
//     var matCellsCount = mat.length * mat[0].length;

//     var dataCount = 0; 
//     for (var i = 0; matIsSparse && i < mat.length; i++) {
//         var row = mat[i];
//         var rowItemsCount = 0;
//         for (var j = 0; matIsSparse && j < row.length; j++) {
//             var item = row[j];
//             if (item) {
//                 dataCount++;
//                 rowItemsCount++;
//             }
    
//             if (dataCount / matCellsCount >= 0.2) {
//                 matIsSparse = false;
//             }
//         }
//         if (rowItemsCount > 2) {
//             matIsSparse = false;
//         }
        
//     }
//     // return matIsSparse;
// }

// var res = isSparse(gMat);
// // console.log('Sparse? input: not N*M mat expecting false, got: ', res);


// var notSparseMat = [
//     [0, 0, 0, 9, 0],
//     [0, 7, 8, 8, 0],
//     [0, 0, 8, 0, 0],
//     [0, 0,25, 0 , 0],
//     [0, 0, 0,0, 15]
// ]

// res = isSparse(notSparseMat);
// // console.log('Sparse? input: row vilotes the no-more-than-2-in-row rule, expecting false, got: ', res)


// var sparseMat = [
//     [0, 0, 0, 9, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 8, 0, 0],
//     [0, 0,25, 0 , 0],
//     [0, 0, 0,0, 15]
// ]

// res = isSparse(sparseMat);
// // console.log('Sparse? input: sparse mat, expecting true, got: ', res);


// function regenerateSparseMat(n, vals, rowIdxs, colIdxs) {
//     var mat = [];
//     for (var i = 0; i < n.length; i++) {
//         var row = array[i];
//         for (var j = 0; j < row.length; j++) {
//             var item = array[j];
//             mat.push(item);
//         }
//     }
//     return mat;
// }
// res = regenerateSparseMat(sparseMat);
// console.log(res);