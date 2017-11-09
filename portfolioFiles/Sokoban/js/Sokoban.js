'use strict'
console.log('Sokoban');

var gMat = createMat(5);

var gGamerPos = {
    i: 1,
    j: 2,
};

var gBox1 = {
    i: 2,
    j: 2,
}

var gElTable = creatTable(gMat);

function initGame() {
    placeGmer(gGamerPos);
    placeBox(gBox1);
}

function createMat(size) {
    var mat = [];
    for (var i = 0; i < size; i++) {
        var row = [];
        for (var j = 0; j < size; j++) {
            var cell = {
                type: 'floor',
                idx: i,
                jdx: j,
            };
            row.push(cell);
        }
        mat.push(row);
    }
    return mat;
}

function creatTable(size) {
    // console.log('creating table');
    var strHtml = '';
    for (var i = 0; i < size.length; i++) {
        strHtml += '<tr class="row">'
        for (var j = 0; j < size.length; j++) {
            strHtml += '<td class="cell" id="cell-' + i + '-' + j +
                '" onclick=cellClicked(this)></td>';
        }
        strHtml += '</tr>'
    }
    var elTable = document.querySelector('.table');
    elTable.innerHTML = strHtml;
    // console.log('html: ', strHtml);
    return elTable;
}

function placeGmer(obj) {
    var idx = obj.i;
    var jdx = obj.j;
    var elCell = document.querySelector('#cell-' + idx + '-' + jdx);  
    elCell.classList.add('player');
    gMat[idx][jdx].type = 'player';
    console.table(gMat)    
}

function placeBox(obj) {
    var idx = obj.i;
    var jdx = obj.j;
    var elCell = document.querySelector('#cell-' + idx + '-' + jdx);
    elCell.classList.add('box');
}

function cellClicked(elCell) {
    var coord = getIdOfCell(elCell);
    moveGamer(gGamerPos, coord);
}

function moveGamer(obj, newPos) {
    var idx = obj.i;
    var jdx = obj.j;
    gMat[idx][jdx].type = 'floor'; 
    var elCell = document.querySelector('#cell-' + idx + '-' + jdx);
    elCell.classList.remove('player');
    idx = newPos.i;
    jdx = newPos.j;
    elCell = document.querySelector('#cell-' + idx + '-' + jdx);
    elCell.classList.add('player');
    gGamerPos.i = idx
    gGamerPos.j = jdx
    gMat[idx][jdx].type = 'player';
    console.table(gMat)
}

function getIdOfCell(elCell) {
    var indexOfCell = elCell.id
    var idx = +indexOfCell.substring(5, indexOfCell.lastIndexOf('-'));
    var jdx = +indexOfCell.substring(indexOfCell.lastIndexOf('-') + 1);
    var coord = {
        i: idx,
        j: jdx,
    };
    return coord;
}

// function isValidMove(cell, player) {
//     var isValid = false;
//     for (var i = player.i - 1; i <= player.i + 1; i++) {
//         for (var j = player.j - 1; j <= player.j + 1; j++) {

//         }
//     }
//     return isValid;
// }




