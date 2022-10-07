let min = 1,
    max = 5,
    guessesLeft = 3,
    winningNum = getRandomNum(min, max);

// UI elements
const game = document.querySelector('.game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');


minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);
    // validate
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Enter a number between ${min} and ${max}`, 'red');
    }
    else {
        message.textContent = ''

        // check win
        if (guess === winningNum) {
            gameOver(true, `${winningNum} is correct!`)
        }
        else {
            guessesLeft--;
            setMessage(`${guess} is not correct, you have ${guessesLeft} guesses left.`, 'red');
            guessInput.style.borderColor = 'red'
            guessInput.value = ''
            if (guessesLeft === 0) {
                gameOver(false, `Game over, you lost, the correct number was ${winningNum}`);
            }
        }

    }
})

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}


function gameOver(win, msg) {
    let color;
    win ? color = 'green' : color = 'red';
    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    setMessage(msg, color);
    guessBtn.value = 'Play Again';
    guessBtn.addEventListener('click', function () {
        location.reload();
    })

}

function getRandomNum(min, max) {
    const num = Math.floor(Math.random()*(max-min+1)+min);
    // console.log(num)
    return num;
}