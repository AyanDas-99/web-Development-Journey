const target = document.querySelector('#name');
const id = document.querySelector('#ID');
const submit = document.querySelector('button[type="submit"]')
const form = document.querySelector('form')
const text = document.querySelector('.text');

const user = {
    userName: 'me',
    id: ''
}

submit.addEventListener('click', (e) => {
    user.userName = target.value;
    user.id = id.value;
    console.log(user)

    form.style.display = 'none'
    text.style.display = 'block'
    document.body.classList.add('hackmode')
    runHack();
    e.preventDefault();
})

function update(msg) {
    const para = document.createElement('p');
    para.textContent = msg;
    text.appendChild(para);
}

const runHack = async () => {
    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => { resolve('Hacking ' + user.userName) }, 1000);
    })
    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => { resolve('Hacking into the system') }, 2000);
    })
    let p3 = new Promise((resolve, reject) => {
        setTimeout(() => { resolve(`Fetched user ID: ` + user.id) }, 3000);
    })
    let p4 = new Promise((resolve, reject) => {
        setTimeout(() => { resolve(`Inside the system`) }, 4000);
    })


    update(await p1);
    update(await p2);
    update(await p3);
    update(await p4);
}

