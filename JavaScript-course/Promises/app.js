// let promise = new Promise(function(resolve, reject){
//     console.log('Promise is pending!');
//     setTimeout(()=>{
//         console.log('The promise is fullfiled')
//         resolve(true)
//     }, 5000)
// })

// let promise1 = new Promise((resolve, reject)=>{
//     console.log('promise1 is pending');
//     setTimeout(()=>{
//         console.log('promise1 is fullfilled');
//         reject("Sorry!! Could not complete the request");
//     },4000);
// })

// console.log('This is 1')
// console.log('This is 2')

// promise.then((value)=>{
//     console.log(value, 'Success');
// })

// promise.catch((error)=>{
//     console.log(error, 'Failure')
// })

// promise1.then((value)=>{
//     console.log(value, 'Success');
// })

// promise1.catch((error)=>{
//     console.log(error, 'Failure');
// })

// loadScript function

const loadScript = (src)=>{
    return new Promise((resolve, reject)=>{
        const script = document.createElement('script');
        script.src = src;
        document.body.appendChild(script);
        script.onload = ()=>{
            resolve(1);
        }
        script.onerror = ()=>{
            reject(new Error('Could not load'));
        }
    })
}

// let p1 = loadScript("https://cdnn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js");

// p1.then((value)=>{
//     console.log(value);
//     console.log('Loaded the script');
//     return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")
// }).then((value)=>{
    
//     console.log('second script loaded');
// }).catch((error)=>{
//     console.log(error);
//     console.log('Problem loading the script');
//     console.log(p1)
// })
// console.log(p1)
// Attaching multlple handlers

// let p1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("p1 resolved");
//     }, 2000)
// })

// p1.then((value)=>{
//     const text = document.createElement('h2');
//     text.textContent = value;
//     document.body.appendChild(text);
// })

// p1.then((value)=>{
//     const para = document.createElement('p');
//     para.textContent = value;
//     document.body.appendChild(para);
// })

// Promise API


let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('This is p1');
    }, 1000)
})

let p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('This is p2');
    }, 2000)
})

let p3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject('This is p3');
    }, 3000)
})

// promise.all
// let promiseAll = Promise.all([p1, p2, p3]);

// promiseAll.then((value)=>{
//     console.log(value)
// })

// promiseAll.catch((value)=>{
//     console.log(value)
// })


let promiseAll = Promise.allSettled([p1,p2,p3]);

promiseAll.then((value)=>{
    console.log(value)
})