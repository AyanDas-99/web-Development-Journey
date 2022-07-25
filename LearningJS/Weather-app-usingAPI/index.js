const errorMSG = document.getElementById('error')
const cityName = document.getElementById('cityName')
const details = document.getElementById('details')
const results = document.getElementById('result')


// credentials for Weather API
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'e0b6052bacmshcfe5da2fca3f2e5p14d484jsn5c655e5224c5',
        'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
    }
};

// 1. Fetching the weather data using a name argument
// 2. Calling updateDom passing the data
const getCurrentWeather = async (name) => {
    try {
        const response = await fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${name}&units=imperial`, options)
        const data = await response.json()
        updateDom(data)
    } catch (err) {
        console.log(err)
        errorMSG.innerHTML = `<h1>Sorry :( Something went wrong</h1>`
    }
}

// Update the DOM using the data
function updateDom (data) {
    if(data.cod != 200){
        errorMSG.innerHTML = '<h1>City not found</h1>'
        return
    }
    value = Object.keys(data.main)
    console.log('data: ',data)
    console.log('keys:',value)
    let text = ''
    value.forEach(element => text +=`<p>${element}: ${data.main[element]}` )
    cityName.innerText = data.name
    details.innerHTML = text
}


// Get city name when searched and passing to getCurrentWeather()
document.getElementById('submit').onclick = (e) => {
    e.preventDefault()
    clearDom()
    const city = document.getElementById('name').value
    getCurrentWeather(city)
}


// clear the dom for fresh data
function clearDom () {
    errorMSG.innerHTML = ''
    cityName.innerHTML = ''
    details.innerHTML = ''
}
