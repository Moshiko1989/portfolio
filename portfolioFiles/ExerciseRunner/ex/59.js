'use strict'
console.log('Ex 59 Solution');

startGame(5, 4);

function startGame(userSizeAsk, userTurnsAsk) {
    var size = userSizeAsk;
    var turnFromUser = userTurnsAsk;
    var turnCount = 0;
    var board = populateBoard(size)

    while (turnCount < turnFromUser) {
        var table = turn(size, board);
        console.table(table);
        turnCount++
    }
}

function populateBoard(size) {
    var lifeCount = 0;
    var board = []
    for (var i = 0; i < size; i++) {
        var row = []
        for (var j = 0; j < size; j++) {
            if (lifeCount < (((size * size) / 9) * 4)) {
                var life = parseInt(Math.random() * 2);
                if (life === 1) lifeCount++;
                row.push(life)
            }
            else row.push(0);
        }

        board.push(row);
    }
    console.table(board);
    return board;
}

function turn(size, currBoard) {
    var prevBoard = currBoard;
    var tempBoard = []
    var worthy = 0;
    for (var i = 0; i < size; i++) {
        var row = [];
        for (var j = 0; j < size; j++) {
            if (!isWorthy(i, j, prevBoard)) worthy = 0;
            else worthy = 1;
            row.push(worthy);
        }
        tempBoard.push(row);

    }
    return tempBoard;
}

function isWorthy(idx, jdx, board) {
    var worthy = false;
    var neighborsCount = 0;
    if (jdx - 1 >= 0) neighborsCount += board[idx][jdx - 1];
    if (jdx + 1 < board.length) neighborsCount += board[idx][jdx + 1];
    if (idx - 1 >= 0) neighborsCount += board[idx - 1][jdx];
    if (idx + 1 < board.length) neighborsCount += board[idx + 1][jdx];

    if (idx - 1 >= 0 && jdx - 1 >= 0) neighborsCount += board[idx - 1][jdx - 1];
    if (idx + 1 < board.length && jdx + 1 < board.length) {
        neighborsCount += board[idx + 1][jdx + 1];
    }
    if (idx + 1 < board.length && jdx - 1 >= 0) {
        neighborsCount += board[idx + 1][jdx - 1];
    }
    if (idx - 1 >= 0 && jdx + 1 < board.length) {
        neighborsCount += board[idx - 1][jdx + 1]
    }
    if (neighborsCount > 2 && neighborsCount < 6) worthy = true;
    return worthy;
}
console.log('DONE!');