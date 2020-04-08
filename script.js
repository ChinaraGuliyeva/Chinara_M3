const button = document.querySelector('.add-button');

const addItemHandler = (event) =>{
    let inputValue=document.querySelector('input');
    let inputContainer=document.querySelector('.input-container');
    let newLine = inputContainer.cloneNode(true);
    let parent = document.querySelector('.parent-container');
    parent.appendChild(newLine);
}

let deleteButtons = document.querySelectorAll('.delete');
console.log(deleteButtons);

const removeItem = (event) => {
    console.log(1);
}

button.addEventListener('click', addItemHandler);

deleteButtons.forEach(element => element.addEventListener('click', removeItem));