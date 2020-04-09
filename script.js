const button = document.querySelector('.add-button');
const parentContainer = document.querySelector('.parent-container');
const arrowUp = document.querySelector('.sort-arrow-up');
const arrowDown = document.querySelector('.sort-arrow-down');
let inputContainer=document.querySelector('.input-container');
let threeNods = document.querySelector('.drag');
let deleteIcon = document.querySelector('.delete');

const addItemHandler = (event) =>{
    let inputValue=document.querySelector('input');
    let newLine = inputContainer.cloneNode(true);
    let parent = document.querySelector('.parent-container');
    parent.appendChild(newLine);
}

const removeItem = (event) => {
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
    let editedArray = [];
    for (let i=0; i<inputsArray.length; i++) {
        let result = inputContainer.cloneNode(true);
        result.appendChild(inputsArray[i]);
        editedArray.push(result);
    }
    //console.log(editedArray);
    parentContainer.innerHTML="";
    editedArray.forEach(element => {
        parentContainer.appendChild(element);
    });
}

const sortDown = ()=> {
    arrowDown.style.display="none";
    arrowUp.style.display="block";
    const inputs = document.querySelectorAll('input');
    let inputsArray = Array.from(inputs);
    inputsArray.sort((a, b) => {return b.value-a.value})
    let editedArray = [];
    for (let i=0; i<inputsArray.length; i++) {
        let result = inputContainer.cloneNode(true);
        result.appendChild(inputsArray[i]);
        editedArray.push(result);
    }
    //console.log(editedArray);
    parentContainer.innerHTML="";
    editedArray.forEach(element => {
        parentContainer.appendChild(element);
    });
}

let dragNdrop = () => {
    let draggables=document.querySelectorAll('.input-container');
    console.log(draggables);
    draggables.forEach( draggable => {
        draggable.addEventListener('dragstart', () => {
            console.log('drag start');
        })
    })

    parentContainer.addEventListener('dragover', () => {console.log('drag over')})
}


button.addEventListener('click', addItemHandler);
parentContainer.addEventListener('click', removeItem);
arrowUp.addEventListener('click', sortUp);
arrowDown.addEventListener('click', sortDown);
button.addEventListener('click', dragNdrop);
