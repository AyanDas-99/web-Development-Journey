const noteText = document.querySelector('#note');
const saveBtn = document.querySelector('#save');
const noteDisplay = document.querySelector('.all-notes');
let deleteBtns = Array.from(document.getElementsByClassName('delete'));

function getNotes() {
    if (localStorage.getItem('note') === null) {
        localStorage.setItem('note', JSON.stringify([]));
    }
    const notes = JSON.parse(localStorage.getItem('note')).reverse();
    console.log(notes);
    noteDisplay.innerHTML = ''
    notes.forEach((note) => {
        const div = document.createElement('div');
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete';
        deleteBtn.textContent = '-';
        const para = document.createElement('p');
        para.style.display = 'inline'
        para.textContent = note;
        div.appendChild(para);
        div.appendChild(deleteBtn);
        noteDisplay.appendChild(div);
    })
}

getNotes();

saveBtn.addEventListener('click', () => {
    const newNote = noteText.value;

    const notes = JSON.parse(localStorage.getItem('note'));
    notes.push(newNote);
    localStorage.setItem('note', JSON.stringify(notes));
    getNotes();
    deleteBtns = Array.from(document.getElementsByClassName('delete'));
})

deleteBtns.forEach((element) => {
    element.addEventListener('click', deleteItem)
})

function deleteItem(e) {
    const target = e.target.parentElement;
    noteDisplay.removeChild(target);
    let note = JSON.parse(localStorage.getItem('note'));
    const index = note.indexOf(target.firstElementChild.textContent);
    note = removeElementFromArray(note, index);
    console.log(typeof note)
    localStorage.setItem('note', JSON.stringify(note));
}

function removeElementFromArray(array, index) {
    let ar1 = [], ar2 = [];
    for (i = 0; i < index; i++) {
        ar1.push(array[i]);
    }
    for (i = index + 1; i < array.length; i++) {
        ar2.push(array[i]);
    }
    return ar1.concat(ar2);
}