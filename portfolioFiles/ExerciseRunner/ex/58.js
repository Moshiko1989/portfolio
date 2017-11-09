'use strict'
console.log('Ex 58 Solution');
/*
Bingo:
*/

var gIsVictory = false;

var gPlayers = [
    { name: 'Player 1', hitsCount: 0, board: createBingoBoard(5), checkRow: 0 },
    { name: 'Player 2', hitsCount: 0, board: createBingoBoard(5), checkRow: 0 }
]

var gNums;
var gcount = 0;

//Sets the pauses between turns.
var int = setInterval(function () {
    game();
}, 100);

//Mother function who runs the game.
function game() {
    var num = drawNum()
    for (var i = 0; i < gPlayers.length; i++) {
        markBoard(gPlayers[i], num)
    }
    checkBingo();
    if (gIsVictory) clearInterval(int);
    console.log('Turn: ', gcount++)
    console.log('Number drawn: ', num);
}

//Initiates gNums.
function createGNums() {
    var nums = []
    for (var i = 1; i < 100; i++) {
        nums.push(i)
    }
    return nums;
}

//Fill up gNums.
function resetNum() {
    gNums = createGNums();
}

//Creates an objects board for a player.
function createBingoBoard(idx) {
    resetNum();
    var board = []
    for (var i = 0; i < idx; i++) {
        var newRow = [];
        for (var j = 0; j < idx; j++) {
            var num = {};
            num.isHit = false;
            num.cellNum = drawNum();
            newRow.push(num);
        }
        board.push(newRow);
    }
    resetNum();
    return board;
}

//Splice of a number from gNums & returns it.
function drawNum() {
    var numIdx = parseInt(Math.random() * gNums.length);
    var num = gNums.splice(numIdx, 1)[0];
    return num;
}

//Takes a player and check if he has the number that has been drawn.
function markBoard(player, num) {
    for (var i = 0; i < player.board.length; i++) {
        for (var j = 0; j < player.board.length; j++) {
            if (player.board[i][j].cellNum === num) {
                player.board[i][j].isHit = true;
                player.hitsCount++;
                if (checkRow(player, i)) {
                    console.log( player.name, 'Marked row!!!!!!!!', i+1)
                }
                if (checkCol(player, j)) {
                    console.log( player.name, 'Marked column!!!!!!!!', j+1)
                }
                if (i === j && checkDiag1(player)) {
                    console.log(player.name, 'Marked DIAGONAL 1 !!!!!!!!');
                }
                if (i + j === player.board.length - 1 &&
                    checkDiag2(player)) {
                    console.log(player.name, 'Marked DIAGONAL 2 !!!!!!!!');
                }
            }
        }
    }
}

//This function checks if a row is marked.
function checkRow(player, idx) {
    var isRow = true;
    for (var i = 0; i < 5; i++) {
        if (!player.board[idx][i].isHit) {
            isRow = false;
            break;
        }
    }
    return isRow;
}

//This function checks if a column is marked.
function checkCol(player, idx) {
    var isCol = true;
    for (var i = 0; i < 5; i++) {
        if (!player.board[i][idx].isHit) {
            isCol = false;
            break;
        }
    }
    return isCol;
}

//This function checks if the first diagonak (from uper left corner) is marked.
function checkDiag1(player) {
    var isDiag1 = true;
    for (var i = 0; i < 5; i++) {
        if (!player.board[i][i].isHit) {
            isDiag1 = false;
            break;
        }
    }
    return isDiag1;
}


function checkDiag2(player) {
    var isDiag2 = true;
    for (var i = 0; i < 5; i++) {
        if (!player.board[i][player.board.length - i - 1].isHit) {
            isDiag2 = false;
            break;
        }
    }
    return isDiag2;
}

//Checks if a player marked his board.
function checkBingo() {
    for (var i = 0; i < gPlayers.length; i++) {
        if (gPlayers[i].hitsCount ===
            gPlayers[i].board.length * gPlayers[i].board.length) {
            gIsVictory = true;
            console.log('Victory? ', gIsVictory);
            console.log('Players: ', gPlayers)
            console.log('Player ' + gPlayers[i].name + ' won');
        }
    }
}

console.log('DONE!');
