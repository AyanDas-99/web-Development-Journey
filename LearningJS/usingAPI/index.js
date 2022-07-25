const image = document.getElementById('random-image')
console.log('done')
function dog() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            let tag = `<img src = '${data.message}' alt = 'dog image' height ='200' width='200'>`
            image.innerHTML += tag
        })
}

document.onclick = () => {
        dog()
} 