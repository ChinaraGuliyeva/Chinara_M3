const button = document.querySelector('.add-button');

const addItemHandler = (event) =>{
    let inputValue=document.querySelector('input');
    let inputContainer=document.querySelector('.input-container');
    let newLine = inputContainer.cloneNode(true);
    let parent = document.querySelector('.parent-container');
    parent.appendChild(newLine);
}

let deleteListener = document.querySelector('.parent-container');


const removeItem = (event) => {
    console.log(event.target);
    let deleteButtons=document.querySelectorAll('.delete');
    console.log(deleteButtons);
}

button.addEventListener('click', addItemHandler);
deleteListener.addEventListener('click', removeItem)