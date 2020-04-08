const button = document.querySelector('.add-button');
const deleteListener = document.querySelector('.parent-container');
const arrowUp = document.querySelector('.sort-arrow-up');
const arrowDown = document.querySelector('.sort-arrow-down');

const addItemHandler = (event) =>{
    let inputValue=document.querySelector('input');
    let inputContainer=document.querySelector('.input-container');
    let newLine = inputContainer.cloneNode(true);
    let parent = document.querySelector('.parent-container');
    parent.appendChild(newLine);
}

const removeItem = (event) => {
    let deleteButtons=document.querySelectorAll('.delete');
    let element=event.target;
    if(element.classList.contains("delete")){
        element.parentNode.remove();
    }
}

const sortUp = ()=> {
    arrowUp.style.display="none";
    arrowDown.style.display="block";
    const inputs = document.querySelectorAll('input');
    let inputsArray = Array.from(inputs);
    inputsArray.sort((a, b) => {return a.value-b.value})
    console.log(inputsArray);
}

const sortDown = ()=> {
    arrowDown.style.display="none";
    arrowUp.style.display="block";
    const inputs = document.querySelectorAll('input');
    let inputsArray = Array.from(inputs);
    inputsArray.sort((a, b) => {return b.value-a.value})
    console.log(inputsArray);
}

button.addEventListener('click', addItemHandler);
deleteListener.addEventListener('click', removeItem);
arrowUp.addEventListener('click', sortUp);
arrowDown.addEventListener('click', sortDown);