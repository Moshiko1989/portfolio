'use strict'
console.log('touch-nums');



var gNums = generateArrOfNums()

var gBoard = createBoard();
// console.log('Board: ', gBoard);

var gCurrNum = 1;
var gStartTime = 0;
renderTable(gBoard);

function addNum(elNum) {
    
    // var startTime = Date.now()
    // console.log('time starts at: ', startTime);
    if (+elNum.innerText === gCurrNum) {
        elNum.classList.add('right-num')
        if (1 === gCurrNum && +elNum.innerText === 1) {
            gStartTime = Date.now();
            console.log('time starts at: ', gStartTime);
        }
        gCurrNum++
    }

    console.log('Currnt number: ', gCurrNum);
    // console.log('+num: ', +num.innerText);
    if (gCurrNum === 17 && +elNum.innerText === 16) {
        var endTime = (Date.now() - gStartTime) / 1000;
        console.log('time ends at: ', endTime);
        var elTime = document.querySelector('#timer');
        elTime.innerHTML = 'Score: ' + endTime;

    }
}

function renderTable(board) {
    var strHtml = ''
    for (var i = 0; i < 4; i++) {
        strHtml += '<tr>'
        for (var j = 0; j < 4; j++) {
            strHtml += '<td class ="cell" onclick = addNum(this)>';
            strHtml += board[i][j];
            strHtml += '</td>';
        }
        strHtml += '</tr>'
    }
    var elBoard = document.querySelector('#board');
    elBoard.innerHTML = strHtml;
}


//Generates a board with random numbers 1-16
function createBoard() {
    var SIZE = 4;
    var board = [];
    for (var i = 0; i < SIZE; i++) {
        board.push([]);
        for (var j = 0; j < SIZE; j++) {
            var randomIdx = parseInt(Math.random() * gNums.length)
            board[i][j] = gNums.splice(randomIdx, 1)[0];
        }
    }
    return board;
}
//Done!


//Generates an array of numbers 1-16
function generateArrOfNums() {
    var arr = [];
    for (var i = 1; i <= 16; i++) {
        arr.push(i);
    }
    return arr;
}
//Done!

