const time = document.querySelector('.time');
setInterval(function () {
    let now = new Date();
    time.textContent = `${now.getHours()<10?'0'+now.getHours():now.getHours()} : ${now.getMinutes()<10?'0'+now.getMinutes():now.getMinutes()} : ${now.getSeconds()<10?'0'+now.getSeconds():now.getSeconds()}`;
}, 10)

document.getElementById('orange').addEventListener('click', ()=>{
    time.style.background = 'orange'
})
document.getElementById('green').addEventListener('click', ()=>{
    time.style.background = 'green'
})
document.getElementById('yellow').addEventListener('click', ()=>{
    time.style.background = 'yellow'
})
