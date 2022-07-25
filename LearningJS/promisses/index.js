// // // Asynchronous Programming

// // const soup = () => console.log('soup')

// // console.log('start speaking')
// // setTimeout(soup, 3000)
// // console.log('still speaking')

// const getDog = async () => {
//     const url = 'https://dog.ceo/api/breeds/image/random'
//     const response = await fetch(url)
//     const data = await response.json()
//     console.log(data)
// }

// const getSoup = async () => {
//     await setTimeout(()=> console.log('soup is ready'), 2000)
// }

// console.log('Start talking')
// getSoup()
// console.log('still speaking')


const promise1 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        teaching = [true, false][Math.floor(Math.random()*2)]
        teaching ? resolve('teacher is teaching'): reject('teacher is not teaching')
    }, 1000)
})
// promise1.then(value => console.log({value})).catch(error => console.log({error}))

// fetch('https://www.google.com/q?="yo"')
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log('Could not fetch the data !! error occured'))
const getResult = async () => {
    try{
        const response = await fetch('https://dog.ceo/api/breeds/image/random')
        const data =await response.json()
        console.log(data)
    }catch(error){
        console.log(error)
    }
}
// getResult()
const restraunt = async () => {
    let review = {rating:1, applause:false}
    try{
        const teach = await promise1
        console.log(teach)
        review.rating = 5
        review.applause = true
        document.querySelector('body').style.backgroundColor = 'lightgreen'
    }catch(error){
        console.log(error)
        document.querySelector('body').style.backgroundColor = 'indianred'
    }
    return review
}

// console.log(restraunt().then(value => console.log(value)))

async function sum (a, b) {
    return a+b
}

sum(1,3).then(value => console.log(value))
