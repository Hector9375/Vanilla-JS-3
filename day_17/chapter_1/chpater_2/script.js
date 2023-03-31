let doList;
let toDoList;
let delbtn;

function initialize(){
    let toDostorage = localStorage.getItem('toDo');
    let doStorage = localStorage.getItem('do');
    doList = document.querySelector('div>div:nth-of-type(1)>ol');
    toDoList = document.querySelector('div>div:nth-of-type(2)>ol');
    if(toDostorage!=null || doStorage!==''){
        toDoList.innerHTML=toDostorage;
    }
    if(doStorage!=null || doStorage!==''){
        doList.innerHTML=doStorage
    }
    let doElements = doList.querySelectorAll('li>label>input');
    let toDoElements = toDoList.querySelectorAll('li>labe>input');
    let addCheckEvent = (each=>{
        each.addEventListener('click',()=>check(each));
    })
    doElements.forEach(addCheckEvent);
    toDoElements.forEach(addCheckEvent);
    document.querySelectorAll('li>button').forEach(addCheckEvent);
    // document.querySelectorAll('li>button').forEach(each)=>{
    //    each.addEventListener('click',(e)=>delToDo(e));
};





function delToDo(elem){
    let button = elem.target;
    let li = button.parentElement;
    li.remove();
    localItem();
}



function add(){
    let work = document.getElementById('work').value;
        console.log(work);
    let [toDo,label ,input] = createWork();
    delbtn = document.createElement('button');
    delbtn.innerText="❌";
    delbtn.addEventListener("click",(e)=>delToDo(e));
    let textData = document.createTextNode(work);
    console.log(textData);

    input.type = 'checkbox';
    input.addEventListener('click',()=>check(input));
    label.appendChild(input);
    label.appendChild(textData);
    toDo.appendChild(label);
    toDo.appendChild(delbtn);
    toDoList.appendChild(toDo);
    localtoDo();
}

function createWork(){
    let toDo = document.createElement('li');
    let label = document.createElement('label');
    let input = document.createElement('input');

    return [toDo,label,input];
}

function check(elem){
    let Elemp = elem.parentElement.parentElement;
    
    if(elem.checked===true){
        toDoList.appendChild(Elemp);
    }else if(elem.checked === false){
        doList.appendChild(Elemp);
    }
    localItem();
}

function localItem(){
    localStorage.setItem('toDo',doList.innerHTML);
    localStorage.setItem('do',toDoList.innerHTML);
}
function localtoDo(){
    localStorage.setItem('toDo',doList.innerHTML);
}