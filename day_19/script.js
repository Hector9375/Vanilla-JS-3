let toDoList;
let doList;
let delBtn;

function initialize() {
    let toDoStorage = localStorage.getItem('toDo');
    let doStorage = localStorage.getItem('Do');
    toDoList = document.querySelector('div>div:nth-of-type(1)>ol');
    doList = document.querySelector('div>div:nth-of-type(2)>ol');
    if(toDoStorage!=null || doStorage!==''){
        toDoList.innerHTML = toDoStorage;
    }
    if(doStorage!=null || toDoStorage!==''){
        doList.innerHTML = doStorage;
    }
    let toDoElement = toDoList.querySelectorAll('li>label>input');
    let doElement = doList.querySelectorAll('li>label>input');
    let addCheckEvent = (each=>{
        each.addEventListener('click',()=>check(each));
    })
    let doInput = doList.querySelectorAll('input');
    for(let i = 0; i < doInput.length; i++){
        doInput[i].checked = true
    }
    toDoElement.forEach(addCheckEvent);
    doElement.forEach(addCheckEvent);
    document.querySelectorAll('li>button').forEach(addCheckEvent);
    localtoDo();
}




function delTodo(elem) {
    let button = elem.target;
    let li = button.parentElement;
    li.remove();
    localItem();
}

function add() {
    let work = document.getElementById('work').value;
    let [toDo, label, input] = createWork();
    delBtn = document.createElement('button');
    delBtn.innerText = '❌';
    delBtn.addEventListener('click', (e)=>delTodo(e));

    let textData = document.createTextNode(work);
    input.type = 'checkbox';
    input.addEventListener('click',()=>check(input));
    label.appendChild(input);
    label.appendChild(textData);
    toDo.appendChild(label);
    toDo.appendChild(delBtn);
    toDoList = document.querySelector('div>div:nth-of-type(1)>ol');
    toDoList.appendChild(toDo);
}

function createWork() {
    let toDo = document.createElement('li');
    let label = document.createElement('label');
    let input = document.createElement('input');

    return [toDo, label, input]
}

function check(elem) {
    toDoList = document.querySelector('div>div:nth-of-type(1)>ol');
    doList = document.querySelector('div>div:nth-of-type(2)>ol');

    let epp = elem.parentElement.parentElement;
    if(elem.checked === true){
        doList.appendChild(epp);
    
    }else if(elem.checked === false) {
        toDoList.appendChild(epp);
    }
    localItem();
}

function localItem() {
    localStorage.setItem('toDo', toDoList.innerHTML);
    localStorage.setItem('Do', doList.innerHTML);
}
function localtoDo() {
    localStorage.setItem('toDo',toDoList.innerHTML);
}