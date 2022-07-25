const container = document.getElementById('container')
let page = 1
const showBtn = document.getElementById('show')
const search = document.getElementById('search')
const tag = document.getElementById('tag')

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'e0b6052bacmshcfe5da2fca3f2e5p14d484jsn5c655e5224c5',
        'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
    }
};

const searchAnimeById = async (id) => {
    try {
        const response = await fetch(`https://anime-db.p.rapidapi.com/anime/by-id/${id}`, options)
        const data = await response.json()
        showDetail(data)
    } catch (error) {
        console.log(error)
    }
}


const searchAnimeByName = async (title) => {
    try {
        const response = await fetch(`https://anime-db.p.rapidapi.com/anime?page=1&size=20&search=${title}&sortBy=ranking&sortOrder=asc`, options)
        const data = await response.json()
        console.log(data)
        updateDom(data)
    } catch (error) {
        console.log(error)
    }
}


const getAnime = async (pageno) => {
    try {
        const response = await fetch(`https://anime-db.p.rapidapi.com/anime?page=${pageno}&size=10&sortBy=ranking&sortOrder=asc`, options)
        const data = await response.json()
        console.log(data)
        updateDom(data)
    } catch (error) {
        console.log(error)
    }
}

const searchAnimeByGenre = async (genre) => {
    try {
        const response = await fetch(`https://anime-db.p.rapidapi.com/anime?page=1&size=20&genres=${genre}&sortBy=ranking&sortOrder=asc`, options)
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

getAnime(page)


// 1st page for recomendation
function getDiv(image, title, type, status, id) {
    const img = `<div class="img-cont"><img class = 'thumbnail' src = '${image}'/></div>`
    const text = `<h3 class='title'>${title}</h3>`
    const extra = `<div class="typeOfShow">${type}</div><div class="status">${status}</div>`
    const final = `<div class="item secondary" id="${id}" onclick="searchAnimeById(id)")>${text}${img}<div class="extra">${extra}</div></div>`
    return final
}

function updateDom(data) {
    if (data.data.length == 0) {
        container.innerText = 'Nothing Found..'
    }
    data.data.forEach(element => {
        container.innerHTML += getDiv(element.image, element.title, element.type, element.status, element._id)
        console.log(element._id)
    })
}

showBtn.onclick = () => {
    page++
    getAnime(page)
}

function clear() {
    container.innerHTML = ''
    tag.innerText = ''
    showBtn.style.display = 'none'
}

search.onsubmit = (e) => {
    e.preventDefault()
    clear()
    userTitle = document.getElementById('query').value
    tag.innerText = `Search Result for - ${userTitle}`
    searchAnimeByName(userTitle)
}

function showDetail(data) {
    clear()
    tag.innerText = data.title
    
}