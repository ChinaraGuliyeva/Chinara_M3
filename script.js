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
    let parent = element.parentNode;
    if(element.classList.contains("delete")){
        console.log(parent);
        element.parentNode.remove();
    }
}

const sortUp = ()=> {
    arrowDown.style.display="block";
    arrowUp.style.display="none";
    const inputs = document.querySelectorAll('input');
    const inputContainers = document.querySelectorAll('.input-container');
    console.dir(inputContainers[0].childNodes[3].value);
    let inputsArray = Array.from(inputContainers);
    inputsArray.sort((a, b) => {return b.childNodes[3].value-a.childNodes[3].value})
    console.log(inputsArray);
    parentContainer.innerHTML="";
    inputsArray.forEach(element => {
        parentContainer.appendChild(element);
    });
}

const sortDown = ()=> {
    arrowUp.style.display="block";
    arrowDown.style.display="none";
    const inputs = document.querySelectorAll('input');
    const inputContainers = document.querySelectorAll('.input-container');
    console.dir(inputContainers);
    let inputsArray = Array.from(inputContainers);
    inputsArray.sort((a, b) => {return a.childNodes[3].value-b.childNodes[3].value})
    parentContainer.innerHTML="";
    inputsArray.forEach(element => {
        parentContainer.appendChild(element);
    });
}

let dragNdrop = () => {
    let draggables=document.querySelectorAll('.input-container');
    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', () => {
            draggable.classList.add('dragging');
        });
        draggable.addEventListener('dragend', () => {
            draggable.classList.remove('dragging');
        })
    })

    parentContainer.addEventListener('dragover', e => {
        e.preventDefault();
        const afterElement = getDragAfterElement(parentContainer, e.clientY);
        const draggable = document.querySelector('.dragging');
        if (afterElement==null) {
            parentContainer.appendChild(draggable);
        }
       else {
            parentContainer.insertBefore(draggable, afterElement)
       }
        })

    let getDragAfterElement = (parentContainer, y) => {
        const draggableElements = [...parentContainer.querySelectorAll('.input-container:not(.dragging)')];

        return draggableElements.reduce((closest, child)=> {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            if (offset < 0 && offset >closest.offset) {
                return { offset: offset, element: child}
            }
            else {
                return closest
            }
        },
        { offset: Number.NEGATIVE_INFINITY}).element;
    }
}


button.addEventListener('click', addItemHandler);
parentContainer.addEventListener('click', removeItem);
arrowUp.addEventListener('click', sortUp);
arrowDown.addEventListener('click', sortDown);
button.addEventListener('click', dragNdrop);
