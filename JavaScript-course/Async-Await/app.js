async function weather(){
    let DelhiWeather = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('50 deg')
        }, 1000)
    })

    let bangaloreWeather = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('45 deg')
        }, 4000)
    })


    let delhiW = await DelhiWeather;
    let bangW = await bangaloreWeather;
    return [delhiW, bangW];
}

let a = weather()
a.then((value)=>{
    console.log(value)
})