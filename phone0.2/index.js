const volbtn = document.getElementsByClassName('volumeBtn')[0];
const powerbtn = document.getElementsByClassName('powerBtn')[0];
const screen = document.getElementsByClassName('innerBezel')[0];

let powerStatus = true;

const power = (status) => {
    console.log("power...")
    powerStatus = status;
    if (status) screen.classList.remove('off');
    else screen.classList.add('off');
}

powerbtn.addEventListener('click', () => power(!powerStatus));