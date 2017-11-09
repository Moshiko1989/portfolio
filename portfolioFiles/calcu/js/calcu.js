'use strict'
console.log('calcu');

var gNum1 = null;
var gNum2 = null;
var gOperator = null;
var gRes = null;
var gMemoryNum = 0;


function addDigit(digit) {
    if (gOperator !== null) {
        if (gNum2 === null) gNum2 = 0;
    }

    if (gNum2 === null) {

        if (gNum1 === null) gNum1 = digit;
        else gNum1 += '' + digit;

        gNum1 = parseFloat(gNum1);
        console.log('first: ', gNum1);
    } else {
        gNum2 += '' + digit;
        gNum2 = parseFloat(gNum2);
        console.log('sec: ', gNum2);
    }
}

function addOperator(operator) {
    gOperator = operator;
    console.log('operator: ', operator);
}

function calculate() {
    if (gNum1 === null || gNum2 === null || gOperator === null) {
        reset();
        return;
    }
    console.log('first: ', gNum1, 'op: ', gOperator, 'sec: ', gNum2);
    switch (gOperator) {
        case '+':
            var res = (gNum1 + gNum2);
            console.log('res: ', res);
            break;
        case '-':
            var res = (gNum1 - gNum2);
            console.log('res: ', res);
            break;
        case '*':
            var res = (gNum1 * gNum2);
            console.log('res: ', res);
            break;
        case '/':
            var res = (gNum1 / gNum2);
            console.log('res: ', res);
            break;
    }
    var elScreen = document.querySelector('.screen');
    elScreen.innerText = res;

    gNum2 = null;
    gOperator = null;

    gNum1 = res;
    gRes = res;
}

function reset() {
    gNum1 = null;
    gNum2 = null;
    gRes = null;
    gOperator = null;
    gMemoryNum = null;
    var elScreen = document.querySelector('.screen');
    elScreen.innerText = null;
}

function memo(input) {
    switch (input) {
        case '+':
            gMemoryNum += gRes;
            var elScreen = document.querySelector('.screen');
            elScreen.innerText = gMemoryNum;
            console.log('gmemo: ', gMemoryNum);
            break;
        case '-':
            gMemoryNum -= gRes;
            var elScreen = document.querySelector('.screen');
            elScreen.innerText = gMemoryNum;
            console.log('gmemo: ', gMemoryNum);
            break;
        case gMemoryNum:
            gNum1 = gMemoryNum;
            var elScreen = document.querySelector('.screen');
            elScreen.innerText = gMemoryNum;
            console.log('gmemo: ', gMemoryNum);
            break;
    }
}