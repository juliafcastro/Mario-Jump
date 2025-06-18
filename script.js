const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

let score = 0;
let canoJaContou = false;

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
};

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');


    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'img/game-over.png';
        mario.style.width = '80px';
        mario.style.marginLeft = '45px';

        clearInterval(loop);

        document.querySelector('#final-score').innerText = score;
        document.querySelector('.game-over').style.display = 'flex';
    }

   
    if (pipePosition < 0 && !canoJaContou) {
        score++;
        document.querySelector('.score').innerText = `Pontos: ${score}`;
        canoJaContou = true;
    }

   
    if (pipePosition > 120) {
        canoJaContou = false;
    }
}, 10);

document.addEventListener('keydown', (event) => {
    if (event.key === "ArrowUp") {
        jump();
    }
});

function restartGame() {
    location.reload();
}
