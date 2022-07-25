const control = document.querySelectorAll('.control')
const result = document.getElementById('result')
const selection = document.getElementById('selection')
const image = document.getElementById('image')
const reset = document.getElementById('reset')


control.forEach(element => {
    element.onclick = () => {
        human = element.id
        computer = computerSelect()
        selection.innerHTML = `<div><h2>You Chose: </h2> <img src="${human}.png"></img></div><div><h2>Computer Chose: </h2><img src="${computer}.png"></img></div>`
        result.innerText = computeWinner(human, computer)
    }
})


const computerSelect = () => {
    const choises = ['rock', 'paper', 'scissor']
    return choises[Math.floor(Math.random() * 3)]
}


function computeWinner(human, computer) {
    if (human == computer) {
        result.style.color = 'black'
        return "it's a draw !!"
    }
    else if ((human == 'rock' && computer == 'paper') || (human == 'paper' && computer == 'scissor') || (human == 'scissor' && computer == 'rock')) {
        result.style.color = "red";
        return "Computer won !!"
    }
    else {
        result.style.color = "green";
        return "You won !!"
    }
}


reset.onclick = () => {
    selection.innerHTML = ''
    result.innerText = ''
    result.style.color = 'black'
}

