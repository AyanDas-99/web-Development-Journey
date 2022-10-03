const form = document.querySelector('form')
const messageDisplay = document.querySelector('.message-display')
const message = document.querySelector('#message')
const loader = document.querySelector('.loading')
const container = document.querySelector('.container')

loading();

function loading() {
    setTimeout(function () {
        loader.style.display = 'none'
        container.style.display = 'block'
    }, 3000)
}




form.addEventListener('submit', sendMessage)

function sendMessage(e) {
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': 'e0b6052bacmshcfe5da2fca3f2e5p14d484jsn5c655e5224c5',
    //         'X-RapidAPI-Host': 'ai-chatbot.p.rapidapi.com'
    //     }
    // };


    // new one
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e0b6052bacmshcfe5da2fca3f2e5p14d484jsn5c655e5224c5',
            'X-RapidAPI-Host': 'aeona3.p.rapidapi.com'
        }
    };



    if (message.value !== '') {
        const msgDiv = document.createElement('div')
        msgDiv.className = 'user-message'
        const para = document.createElement('p')
        para.appendChild(document.createTextNode(message.value))
        msgDiv.appendChild(para)
        messageDisplay.appendChild(msgDiv)

        // fetch(`https://ai-chatbot.p.rapidapi.com/chat/free?message=${message.value}&uid=user1`, options)
        //     .then(response => response.json())
        //     .catch(err => console.error(err));

        // new one
        fetch(`https://aeona3.p.rapidapi.com/?text=${message.value}&userId=12312312312`, options)
            .then(response => response.text())
            .then(response => showResponse(response))
            .catch(err => console.error(err));


        messageDisplay.scrollTop = messageDisplay.scrollHeight - messageDisplay.clientHeight;
        message.value = ''
        e.preventDefault()
    }

}

function showResponse(response) {
    const message = response
    console.log(message)
    const responseDiv = document.createElement('div')
    responseDiv.className = 'response'
    const para = document.createElement('p')
    para.appendChild(document.createTextNode(message))
    responseDiv.appendChild(para)
    messageDisplay.appendChild(responseDiv)
    messageDisplay.scrollTop = messageDisplay.scrollHeight - messageDisplay.clientHeight;
}