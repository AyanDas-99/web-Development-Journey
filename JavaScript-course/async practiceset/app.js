// async function loadScript(){
//     let script = new Promise((resolve, reject)=>{
//         const scr = document.createElement("script");
//         scr.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js";
//         scr.onload = ()=>{
//             resolve("Loaded")
//         }
//         scr.onerror = ()=>{
//             reject("Not loaded")
//         }
//         document.body.appendChild(scr)
//     })

//     return await script;
// }

// let scriptStatus= loadScript();
// scriptStatus.then((value)=>{
//     console.log(value)
// })

// const loadScript = new Promise((resolve, reject)=>{ //         const scr = document.createElement("script");
//         scr.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js";
//         scr.onload = ()=>{
//             resolve("Loaded")
//         }
//         scr.onerror = ()=>{
//             reject("Not loaded")
//         }
//         document.body.appendChild(scr)
// })

// const loaded = async()=>{
//     let a = new Date().getMilliseconds();
//     result = await loadScript;
//     console.log(result)
//     console.log(new Date().getMilliseconds() - a)

// const p = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         reject(new Error("What the hell is happening?"));
//     }, 3000)
// })

// async function getIt(){
//     try{
//         let val = await p;
//     }
//     catch(err){
//         console.log(err + ' is an error')
//     }
// }

// getIt()

let p1 = async()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(10)
        }, 2000)
    })
}

let p2 = async()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(20)
        }, 1000)
    })
}

let p3 = async()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(30)
        }, 3000)
    })
}

const run = async()=>{

    let a=p1();
    let b=p2();
    let c=p3();
    let pAll = await Promise.all([a, b, c]);
    console.log(pAll);
}

run()