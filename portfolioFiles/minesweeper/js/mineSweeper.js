'use strict'
console.log('Mine Sweeper')

var gInterval;
var gMinutesLabel = document.getElementById("minutes");
var gSecondsLabel = document.getElementById("seconds");
var gTotalSeconds = 0;

var gState = {
    isGameOn: true,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
}

var gBoard = buildBoard(4);

function initGame() {
    setMinesNegsCount(gBoard);
    renderBoard(gBoard)
}

function buildBoard(size) {
    var board = [];
    var mineCount = 0;
    for (var i = 0; i < size; i++) {
        board.push([]);
        for (var j = 0; j < size; j++) {
            board[i][j] = {
                isMine: false,
                // isMarked: false,
                isShowen: false,
                countNegs: 0
            };
            var rand = Math.random();
            if (rand < 0.2) {
                board[i][j].isMine = true;
                mineCount++
            }
        }
    }
    var elMineCount = document.querySelector('.mineCount');
    elMineCount.innerText = 'mines count: ' + mineCount;
    gState.mineCount = mineCount;
    var elIsShowenCount = document.querySelector('.isShowenCount');
    elIsShowenCount.innerText = 'remained mines: ' + mineCount;
    gState.isShowenCount = mineCount;
    return board;
}

function setMinesNegsCount(board) {
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board.length; j++) {
            if (board[i][j].isMine) {
                for (var negOfI = i - 1; negOfI <= i + 1; negOfI++) {
                    if (negOfI < 0 || negOfI >= board.length) continue;
                    for (var negOfJ = j - 1; negOfJ <= j + 1; negOfJ++) {
                        if (negOfJ < 0 || negOfJ >= board.length) continue;
                        if (negOfI === i && negOfJ === j) continue;
                        board[negOfI][negOfJ].countNegs += 1;
                    }
                }
            }
        }
    }
}

function renderBoard(board) {
    var strHtml = ''
    for (var i = 0; i < board.length; i++) {
        strHtml += '<tr>';
        for (var j = 0; j < board.length; j++) {
            strHtml += '<td id="cell-' + i + '-' + j +
                '" class="covered" onclick="cellClicked(this,' +
                i + ',' + j + ')" oncontextmenu="cellMarked(this); return false;">'

            strHtml += board[i][j].isMine
            strHtml += '</td>'
        }
        strHtml += '</tr>';
    }
    var elBoard = document.querySelector('.board')
    elBoard.innerHTML = strHtml;
}

function cellClicked(elCell, i, j) {
    if (gState.shownCount === 0) {
    gInterval = setInterval(setTime, 1000);
    }
    if (elCell.classList.contains('marked')) return;
    if (gBoard[i][j].isShowen) return;
    gState.shownCount++
    gBoard[i][j].isShowen = true;
    elCell.classList.remove("covered")
    elCell.classList.add('exposed')
    if (elCell.innerText === 'true') {
        gState.isGameOn = false;
        console.log('game on: ', gState.isGameOn)
    } else {
        elCell.innerText = gBoard[i][j].countNegs;
        if (elCell.innerText === '0') {
            expandShown(gBoard, elCell, i, j)
        }
    }
    checkGameOver();
}

function expandShown(board, elCell, i, j) {
    for (var negOfI = i - 1; negOfI <= i + 1; negOfI++) {
        if (negOfI < 0 || negOfI >= board.length) continue;
        for (var negOfJ = j - 1; negOfJ <= j + 1; negOfJ++) {
            if (negOfJ < 0 || negOfJ >= board.length) continue;
            if (negOfI === i && negOfJ === j) continue;
            if (board[negOfI][negOfJ].isMine === false) {
                var strId = 'cell-' + negOfI + '-' + negOfJ
                var newElement = document.querySelector('#' + strId);
                cellClicked(newElement, negOfI, negOfJ);
            }
        }
    }
}

function cellMarked(elCell) {
    if (!gState.isGameOn) return;
    var elIsShowenCount = document.querySelector('.isShowenCount');
    if (elCell.classList.contains('marked')) {
        elCell.classList.remove('marked');
        gState.markedCount--;
        console.log('stts: ', gState)
    } else {
        elCell.classList.add('marked');
        gState.markedCount++;
        gState.isShowenCount--
    }
    elIsShowenCount.innerText = 'remained mines: ' + (gState.mineCount - gState.markedCount);
}


function checkGameOver() {
    var matSize = gBoard.length * gBoard.length;
    if (matSize - gState.shownCount === gState.mineCount) {
        gState.isGameOn = false;
        clearInterval(gInterval)
        console.log('game on: ', gState.isGameOn);

    }
    
    if (!gState.isGameOn) {
        for (var i = 0; i < gBoard.length; i++) {
            for (var j = 0; j < gBoard.length; j++) {
                if (document.querySelector('.covered')) {
                    var cell = document.querySelector('.covered');
                    console.log('cell: ', cell.innerText);
                    cellClicked(cell, i, j);
                }
            }
        }
    }
    
}

function setTime() {
    ++gTotalSeconds;
    gSecondsLabel.innerHTML = pad(gTotalSeconds % 60);
    gMinutesLabel.innerHTML = pad(parseInt(gTotalSeconds / 60));
}

function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    }
    else {
        return valString;
    }
}