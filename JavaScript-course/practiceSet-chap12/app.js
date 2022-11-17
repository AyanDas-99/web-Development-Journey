// const p = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('Hello\nWorld');
//     }, 2000)
// })

// p.then(value=>console.log(value1))

// spread syntax

function sum(a,b,c) {
    console.log(a+b+c);
}

let arr = [1,2,3];
sum(...arr);