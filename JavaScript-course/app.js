let val;
val = document.getElementsByTagName('td')
console.log(val)
console.log(val)
val = Array.from(val)
val.forEach(function(element){
    console.log(element.innerHTML)
})

