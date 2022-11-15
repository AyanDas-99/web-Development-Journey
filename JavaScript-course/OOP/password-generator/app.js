const generateBtn = document.querySelector('#generate');
const passLength = document.querySelector('#length');
const generatedPass = document.querySelector('#generatedPassword');
const copyBtn = document.querySelector('#copy');

class Password {
    generateEasy(length) {
        let password = '';
        let i;
        for (i = 0; i < length; i++) {
            password = password.concat(String.fromCharCode(Password.genRandNum(97, 123)));
        }
        return password;
    }

    generateDifficult(length) {
        let password = '';
        let i;
        for (i = 0; i < length; i++) {
            password = password.concat(String.fromCharCode(Password.genRandNum(65, 123)));
        }
        return password;
    }

    generateUltra(length) {
        let password = '';
        let i;
        for (i = 0; i < length / 2; i++) {
            password = password.concat(String.fromCharCode(Password.genRandNum(33, 127)));
        }
        password = password.concat(' ');
        for (i = 0; i < length - 1 - (length / 2); i++) {
            password = password.concat(String.fromCharCode(Password.genRandNum(33, 127)));
        }
        return password;

    }

    static genRandNum(min, max) {
        return Math.ceil(Math.random() * (max - min) + min);
    }
}

generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', copyToClip);

function generatePassword(e) {
    e.preventDefault();
    const selected = document.querySelector('input[name="difficulty"]:checked');
    let password;
    const p = new Password();
    if (selected.value === 'easy') password = p.generateEasy(passLength.value);
    else if (selected.value === 'difficult') password = p.generateDifficult(passLength.value);
    else password = p.generateUltra(passLength.value);
    generatedPass.value = password;
    copyBtn.disabled = false;
}

function copyToClip(e) {
    e.preventDefault();
    navigator.clipboard.writeText(generatedPass.value).then(() => {
        alert('copied to clipboard')
    }, () => {
        alert('could\'nt copy to clipboard');
    });
}