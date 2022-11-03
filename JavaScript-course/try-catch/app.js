async function getQuote(){
    try{
        let quote = await fetch("https://animechann.vercel.app/api/random");
    }
    catch {
        let quote = await fetch("https://animechan.vercel.app/api/random");
    }
    return quote
}

const quotes = getQuote();
quotes.then((value)=>{
    console.log(value.json());
})