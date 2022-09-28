bars, nums;
function start() {
    const barContainer = document.getElementById('barContainer')
    array = document.getElementById('array').value.split(',')
    array.forEach(function (value) {
        barContainer.innerHTML += `<div class="bar" id="${value}"></div>`
    })
    document.querySelector('form').style.display = 'none'

    bars = document.querySelectorAll('.bar')

    bars.forEach(function (bar) {
        document.getElementById('numbers').innerHTML += '<div class="nums"></div>'
    })

    nums = document.querySelectorAll('.nums')

    updateBars(bars);

}
function updateBars(bars) {
    for (let i = 0; i < bars.length; i++) {
        height = Number(bars[i].id) * 20;
        bars[i].style.height = `${height}px`
        nums[i].innerHTML = bars[i].id
    }
}




function sort() {
    for (let j = 0; j < bars.length - 1; j++) {
        if (Number(bars[j].id) > Number(bars[j + 1].id)) {
            tmp = Number(bars[j].id)
            bars[j].id = Number(bars[j + 1].id)
            bars[j + 1].id = tmp
        }
        updateBars(bars)
    }
}