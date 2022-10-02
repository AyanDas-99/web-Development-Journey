// UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


loadEventListeners();

function loadEventListeners() {
    // DOM load event
    document.addEventListener('DOMContentLoaded', getTasks)

    // Add task
    form.addEventListener('submit', addTask)

    // remove task event
    taskList.addEventListener('click', removeTask)

    // clear task event
    clearBtn.addEventListener('click', clearTasks)

    // filter tasks event
    filter.addEventListener('keyup', filterTasks)
}

// Get tasks from localStorage
function getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.forEach(function (task) {
        const li = document.createElement('li');
        li.className = 'collection-item'
        li.appendChild(document.createTextNode(task))

        // create the remove task icon and append to li
        const link = document.createElement('a')
        link.className = 'delete-item secondary-content'
        link.innerHTML = '<i class="fa fa-remove"></i>'
        link.style.cursor = 'pointer'
        li.appendChild(link)

        // append li to ul
        taskList.appendChild(li)
    })
}

function addTask(e) {
    if (taskInput.value === '') {
        alert('Add task');
    }
    else {
        // create list item with the task input
        const li = document.createElement('li');
        li.className = 'collection-item'
        li.appendChild(document.createTextNode(taskInput.value))

        // create the remove task icon and append to li
        const link = document.createElement('a')
        link.className = 'delete-item secondary-content'
        link.innerHTML = '<i class="fa fa-remove"></i>'
        link.style.cursor = 'pointer'
        li.appendChild(link)

        // append li to ul
        taskList.appendChild(li)
        storeTaskInLS(taskInput.value);

        // clear input field
        taskInput.value = ''

    }

    e.preventDefault();
}

function storeTaskInLS(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    console.log(task)
    tasks.push(task);
    console.log(tasks)
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you sure')) {
            e.target.parentElement.parentElement.remove();
            // Remove from LS
            removeTaskFromLS(e.target.parentElement.parentElement);
        }
    }
}

function removeTaskFromLS(taskItem) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    
    tasks.forEach(function(task, index) {
        if(taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    })

    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function clearTasks(e) {
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    localStorage.clear();
}

function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function (task) {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block'
        }
        else {
            task.style.display = 'none'
        }
    })
}