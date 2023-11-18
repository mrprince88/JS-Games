let grid = document.querySelector('.grid');

function drawBoard() {
    for (let i = 1; i <= 9; i++) {
        let square = document.createElement('div');
        square.setAttribute('id', i);
        square.classList.add('square');
        grid.appendChild(square);
    }
}
drawBoard();

const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');

let result = 0;

let currentTime = timeLeft.textContent,
    hitPosition = null;

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole')
    });

    let randomPos = square[Math.floor(Math.random() * 9)];
    randomPos.classList.add('mole');

    hitPosition = randomPos.id;
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if (id.id === hitPosition) {
            result = result + 1;
            score.textContent = result;
            hitPosition = null;
        }
    })
})

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;
    randomSquare();

    if (currentTime === 0) {
        clearInterval(timerId);
        alert('GAME OVER! Youre final score is ' + result);
    }
}

let timerId = setInterval(countDown, 1000)