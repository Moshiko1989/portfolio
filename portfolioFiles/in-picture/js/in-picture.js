'use strict'
console.log('in-pcture');

var gQuests = [];
var gCurrQuestIdx = 0;
var elImage;
var elAnswers;


function init() {
    elImage = document.querySelector('#quest-image');
    console.log('elmg: ', elImage);
    elAnswers = document.querySelector('#quest-answers');
    initGame();
}

function initGame() {
    createQuests();
}

function createQuests() {
    gQuests = [
        { id: 0, opts: ['The house is small', 'The house is big'], correctOptIndex: 0 },
        { id: 1, opts: ['The monster is green', 'The monster is blue'], correctOptIndex: 1 },
        { id: 2, opts: ['The fish is gold', 'The fish is black'], correctOptIndex: 0 }
    ]
    renderQuest();
}

function renderQuest() {
    var currQuest = gQuests[gCurrQuestIdx];
    var currOpts = currQuest.opts;

    var str = '';
    for (var i = 0; i < currOpts.length; i++) {
        str += '<li onclick="checkAnswer(this)">' + currOpts[i] + '</li>';       
    }

    elImage.innerHTML = '<img src="img/' + gCurrQuestIdx + '.jpeg"/>'
    elAnswers.innerHTML = str;
    
}

function checkAnswer(optIdx) {
    // console.log('corect', gQuests[gCurrQuestIdx].opts[gQuests[gCurrQuestIdx].correctOptIndex]);
    if (optIdx.innerText === gQuests[gCurrQuestIdx].opts[gQuests[gCurrQuestIdx].correctOptIndex]){
        // console.log('innerText', optIdx.innerText);
        gCurrQuestIdx++
        if (gCurrQuestIdx === gQuests.length){
            console.log('you won');
        } else renderQuest();
    }
    else console.log('wrong answer')
}