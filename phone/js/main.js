const mainframe = document.getElementById('mainframe');
const screen = document.getElementById('screen');
const battery = document.getElementById('battery');
const lockScreen = document.getElementById('lock-screen');
const homeScreen = document.getElementById('home');
const chromeApp = document.getElementById('chrome');
const cameraApp = document.getElementById('camera');
const navBtn = document.getElementById('nav');
const powerBtn = document.getElementById('lock-btn');
let isOn = false;


// navBtn is default off after poweroff


function pageOff() {
   lockScreen.classList.remove('active');
   homeScreen.classList.remove('active');
   chromeApp.classList.remove('active');
   camera.classList.remove('active');
}


function powerOff() {
    pageOff();
    navBtn.classList.add('off');
    mainframe.classList.add('black');
    screen.classList.add('off');
}

function powerOn() {
    mainframe.classList.remove('black');
    screen.classList.remove('off');
}

function lockscreen() {
    pageOff();
    lockScreen.classList.add('active');
}

function homescreen() {
    pageOff();
    homeScreen.classList.add('active');
    navBtn.classList.remove('off');
    mainframe.classList.remove('black');
}


function appPreSetup() {
    mainframe.classList.add('black');
    pageOff();
}

function OpenApp(appName) {
    appPreSetup();
    app = document.getElementById(appName);
    app.classList.add('active');
}


// power button press
powerBtn.addEventListener('click', () => {
    if(isOn == false) {
        powerOn();
        isOn = true;
        console.log('turned on')
        lockscreen();
    }
    else {
        powerOff();
        isOn = false;
    }
})



//Lock screen press
lockScreen.addEventListener('click', () => {
    homescreen();
})





powerOff();
