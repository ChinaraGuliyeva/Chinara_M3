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
    let deleteButtons=document.querySelectorAll('.delete');
    let element=event.target;
    if(element.classList.contains("delete")){
        element.parentNode.remove();
    }
}

button.addEventListener('click', addItemHandler);
deleteListener.addEventListener('click', removeItem)