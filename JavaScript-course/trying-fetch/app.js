let doc = fetch("https://animechan.vercel.app/api/random");
// doc.then((valuve)=>{
//     value = value.json();
//     console.log(value)
// }).then((value)=>console.log)
doc.then((value)=>{
    value = value.json()
    console.log(JSON.parse(value))
})