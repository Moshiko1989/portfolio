console.log('baloons');

gBloons = [
    { name: 'baloon1', bottom: 0, speed: 5 },
    { name: 'baloon2', bottom: 0, speed: 9 }
];

function popBaloon(elBaloon) {
    var popSound = new Audio('audio/Pop - sound.mp3');
    popSound.play()
    // elBaloon.style.display = 'none'; 
    elBaloon.classList.add('poped');
}

function startGame() {
    var gIntervalBaloons = setInterval(function () {
        var elBaloons = document.querySelectorAll(".baloon");
        console.log('baloons: ', elBaloons);

        for (var i = 0; i < elBaloons.length; i++) {
            var elBaloon = elBaloons[i];
            var baloon = gBloons[i];
            baloon.bottom += baloon.speed;
            elBaloon.style.bottom = baloon.bottom + 'px'
        }
    }, 1000)
}
