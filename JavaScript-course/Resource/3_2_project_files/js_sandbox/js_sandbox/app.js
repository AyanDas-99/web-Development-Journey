// let val;

// val = document;
// val = document.all;
// val = document.all[2];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList[0];

// val = document.images;

// val = document.scripts;
// val = document.scripts[2].getAttribute('src');

// let scripts = document.scripts;

// let scriptsArr = Array.from(scripts);

// scriptsArr.forEach(function(script) {
//   console.log(script.getAttribute('src'));
// });

// console.log(val);

// const clear = document.querySelector('.clear-tasks')
// clear.addEventListener('click',onclick)

// function onclick(e) {
//   let val;

//   val = e.target.classList;

//   console.log(val)
// }

// const heading = document.querySelector('h5')
// const card = document.querySelector('.card')

// card.addEventListener('mousemove', showCoord)

// function showCoord(e) {
//   heading.innerText = `X: ${e.offsetX}  Y:${e.offsetY}`

// }

// const form = document.querySelector('form')
// const taskInput = document.getElementById('task')


// form.addEventListener('submit', runEvent)

// function runEvent(e) {
//   task = taskInput.value;
//   if (localStorage.getItem('tasks') === null) {
//     tasks = []
//   } else {
//     tasks = JSON.parse(localStorage.getItem('tasks'))
//   }

//   tasks.push(task)
//   localStorage.setItem('tasks', JSON.stringify(tasks))
//   taskInput.value = ''
//   e.preventDefault();
//   printTasks();
// }

// // taskInput.addEventListener('keypress', keylog)

// // function keylog(e) {
// //   console.log(e.target.value);
// // }
// function printTasks() {
//   let list = JSON.parse(localStorage.getItem('tasks'))
//   list.forEach(function (item) {
//     console.log(item)
//   })
// }