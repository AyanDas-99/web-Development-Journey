let promise = new Promise(function(resolve, reject){
    console.log('Promise is pending!');
    setTimeout(()=>{
        console.log('The promise is fullfiled')
        resolve(true)
    }, 5000)
})

let promise1 = new Promise((resolve, reject)=>{
    console.log('promise1 is pending');
    setTimeout(()=>{
        console.log('promise1 is fullfilled');
        reject("Sorry!! Could not complete the request");
    },4000);
})

console.log('This is 1')
console.log('This is 2')

promise.then((value)=>{
    console.log(value, 'Success');
})

promise.catch((error)=>{
    console.log(error, 'Failure')
})

promise1.then((value)=>{
    console.log(value, 'Success');
})

promise1.catch((error)=>{
    console.log(error, 'Failure');
})