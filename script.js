const button = document.querySelector('.add-button');

const addItemHandler = (event) =>{
    let inputValue=document.querySelector('input');
    let inputContainer=document.querySelector('.input-container');
    let newLine = inputContainer.cloneNode(true);
    let parent = document.querySelector('.parent-container');
    parent.appendChild(newLine);
}

button.addEventListener('click', addItemHandler);