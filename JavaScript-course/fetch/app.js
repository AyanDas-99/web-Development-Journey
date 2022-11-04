// const p = fetch("https://animechan.vercel.app/api/random");
// // p.then((response) => {
// //     console.log(response)
// //     return response.json();
// // }).then((quote) => console.log(quote));

// p.then((respose)=>{
//     respose = respose.json();
//     console.log(respose)
//     return respose;
// }).then((quote)=>{
//     // console.log(quote.anime);
//     // console.log(quote.character);
//     console.log(quote.character, quote.anime)
//     updateBody(quote.quote)
// })          


// const updateBody = (quote)=>{
//     const head = document.createElement('h1');
//     head.textContent = quote;
//     document.body.appendChild(head);
// }

const getTodo = async(id)=>{
    p = await fetch('https://jsonplaceholder.typicode.com/posts/'+id);
    data = await p.json();
    console.log(data)
}

const postTodo = async()=>{
    const title = prompt("Enter the title");
    const body = prompt("Enter the body");
    const id = parseInt(prompt("Enter the id"));

    const option = {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            body: body,
            userId: id,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }

    let p = await fetch('https://jsonplaceholder.typicode.com/posts', option);
    console.log(await p.json());
}

// postTodo();

