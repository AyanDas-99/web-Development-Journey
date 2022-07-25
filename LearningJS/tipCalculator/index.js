const amount = document.getElementById('amount')
const tipPercent = document.getElementById('percent')
const noOfPeople = document.getElementById('nop')
const decrement = document.getElementById('decrement')
const increment = document.getElementById('increment')
const tip = document.getElementById('tip')
const total = document.getElementById('total')


// Number of people increment decrement
increment.onclick = () => noOfPeople.innerText++
decrement.onclick = () => {
    if (noOfPeople.innerText != 1) noOfPeople.innerText--
}

const calculateBill = () => {
    console.log(amount.value, tipPercent.value)
    tipAmount = Number((amount.value * (tipPercent.value / 100))).toFixed(1)
    totalAmount = Number((Number(amount.value) + tipAmount)).toFixed(1)
    tip.innerText = tipAmount
    total.innerText = totalAmount
}