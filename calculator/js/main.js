const ac = document.getElementById('ac');
const off = document.getElementById('-0-');
const calculate = document.getElementById('=')
const result = document.getElementById('active')

let number1 = '', number2 = '', i1, i2, chance = 1;
let exp = '';


function calc(element) {
    if (!isNaN(Number(element.innerText))) {
        console.log('a number')
        result.innerText += element.innerText;
        if (chance == 1) {
            number1 = result.innerText;
        }
        else {
            for (let index = i1+1; index < result.innerText.length; index++) {
                number2 += result.innerText[index];
            }
            console.log(number2)
        }
    }
    else {
        console.log('non number')
        if (chance == 1) {
            i1 = result.innerText.length;
            exp = element.innerText;
            chance = 2;
            result.innerText += element.innerText;
        }
        else if (chance == 2) {
            chance = 2;
            number1 = getResult(number1, exp, number2);
            number2 = '';
            i1 = result.innerText.length;
            exp = element.innerText;
        }
    }
}

function getResult(a, exp, b) {
    let c = 0;
    console.log(a,b);
    if (exp == '+') {
        c = Number(a) + Number(b);
    }
    else if (exp == '-') {
        c = Number(a) - Number(b);
    } else if (exp == '*') {
        c = Number(a) * Number(b);
    } else if (exp == '/') {
        c = Number(a) / Number(b);
    }
    console.log('the answer is :',c);
    return c;
}

function clearScreen() {
    result.innerText = '';
    chance = 1;
    number1 = '';
    number2 = '';
}

function backSpace() {
    operation = ''
    for (let index = 0; index < result.innerText.length - 1; index++) {
        const element = result.innerText[index];
        operation += element;
    }
    result.innerText = operation;
}

function show() {
    result.innerText = getResult(number1, exp, number2);
}