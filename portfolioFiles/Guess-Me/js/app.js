'use strict';

var gQuestsTree;
var gCurrQuest;
var gPrevQuest = null;
var gLastRes = null;

$(document).ready(init);

function init() {
    console.log('tree pre if: ', gQuestsTree)
    if (!localStorage.getItem('tree')) {
        // console.log('enter IF');
        gQuestsTree = createQuest('Male?');
        gQuestsTree.yes = createQuest('Gandhi');
        gQuestsTree.no = createQuest('Rita');
    } else {
        // console.log('enter ELSE');
        var lastUseTreeStr = localStorage.getItem('tree');
        // console.log('last use tree: ', lastUseTreeStr);
        var lastUseTreeObj = JSON.parse(lastUseTreeStr);
        // console.log('lastUserTreeObj', lastUseTreeObj);
        gQuestsTree = lastUseTreeObj;
    }
    console.log('tree post if: ', gQuestsTree)

    gCurrQuest = gQuestsTree;
}

function startGuessing() {
    // DONE!!! ===  TODO: hide the gameStart section
    console.log('Game Start tree: ', gQuestsTree);
    var $elGameStart = $('.gameStart')
    $elGameStart.hide();
    // console.log('starr()tree: ', gQuestsTree);
    // console.log('starr()curr: ', gCurrQuest);
    renderQuest();
}

function renderQuest() {
    // DONE!!! === TODO: select the <h2> inside gameQuest and update its text by 
    // the currQuest text

    // console.log('rendering...');
    var $elH2InGameQuest = $('.gameQuest > h2');
    $elH2InGameQuest.text(gCurrQuest.txt);
    var $elGameQuest = $('.gameQuest')
    $elGameQuest.show();
    // console.log('tree: ', gQuestsTree);
}

function userResponse(res) {
    // If this node has no children
    if (gCurrQuest.yes === null) {
        if (res === 'yes') {
            alert('Yes, I knew it!');
            // TODO: improve UX
            var $elGameStart = $('.gameStart')
            $elGameStart.show();
            var $elGameQuest = $('.gameQuest')
            $elGameQuest.hide();
            restartGame();
        } else {
            alert('I dont know...teach me!')
            // DONE!!! === TODO: hide and show gameNewQuest section
            var $el$GameNewQuest = $('.gameNewQuest')
            $el$GameNewQuest.show();
            var $elGameQuest = $('.gameQuest')
            $elGameQuest.hide();
        }
    } else {
        // Done!!! TODO: update the prev, curr and res global vars
        gPrevQuest = gCurrQuest; //VVVVVVV
        // console.log('prev: ', gPrevQuest)
        gCurrQuest = gCurrQuest[res];  //VVVVVVVV
        // console.log('curr: ', gCurrQuest)
        gLastRes = res; //VVVVVVVV
        // console.log('last res: ', gLastRes);
        renderQuest();
    }
}

function addGuess() {
    // Done!!! TODO: create 2 new Quests based on the inputs' values
    // console.log('last res: ', gLastRes);
    var $NewGuess = $('#newGuess').val();
    var $NewQuest = $('#newQuest').val();
    var newQuest = createQuest($NewQuest);
    // Done!!! TODO: connect the 2 Quests to the quetsions tree
    newQuest.yes = createQuest($NewGuess);
    newQuest.no = gPrevQuest[gLastRes];
    gPrevQuest[gLastRes] = newQuest;

    restartGame();
}

function createQuest(txt) {
    return {
        txt: txt,
        yes: null,
        no: null
    }
}

function restartGame() {
    $('.gameNewQuest').hide();
    $('.gameStart').show();
    gCurrQuest = gQuestsTree;
    gPrevQuest = null;
    gLastRes = null;
    var strQuestsTree = JSON.stringify(gQuestsTree)
    // console.log('tree: ', gQuestsTree);
    // console.log('json str: ', strQuestsTree);
    // console.log('localstorage game over preClear: ', localStorage);
    localStorage.removeItem('tree')
    // console.log('localstorage game over postClear preSet: ', localStorage);
    localStorage.setItem('tree', strQuestsTree);
    // console.log('localstorage game over postSet: ', localStorage)
    console.log('Game Over tree: ', gQuestsTree);
}