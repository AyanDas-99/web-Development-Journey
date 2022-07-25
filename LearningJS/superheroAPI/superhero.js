const base = 'http://gateway.marvel.com/v1/public/'
const apikey = 'apikey=59a1337b17560afe03d8bba564fffb37'
const hash = 'hash=d5accdcd6879c0baf56eda51a18e261d'
const ts = 'ts=1'
const authorise = `${ts}&${apikey}&${hash}`

const image = document.getElementById('superhero')
const data = document.getElementById('data')

const getSuperhero = (name) => {

    fetch(`${base}characters?name=${name}&${authorise}`)
        .then(response => response.json())
        .then(json => {
            const file = (json.data.results[0])
            console.log(file)
            image.innerHTML = `<img src='${file.thumbnail.path}.${file.thumbnail.extension}'>`
            data.innerHTML = `<h1>${file.name}</h1><p>Series: ${file.series.items[0].name}</p><p>Stories: ${file.stories.items[0].name} </p><p>Description: ${file.description}</p>`
        })

}

document.getElementById('forms').onclick = (e) => {
    e.preventDefault()
    const text = document.getElementById('heroname')
    const heroName= text.value.split(' ').join('%20')
    getSuperhero(heroName)
}


