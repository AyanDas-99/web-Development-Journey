function getPoke(name) {
    fetch(`https://pokeapi.co/api/v2//${name}/`)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            return response
        })
        .catch(err => console.error(err));
}

getPoke('pikachu')