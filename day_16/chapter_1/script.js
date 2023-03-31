// 1. 로컬스토리지에 기존에 작성된 목록이 있는지 확인한다.
// 2. 만약 있다면 각 로컬스토리지 목록을 추가한다.
// 3. 할일 추가시 로컬스토리지 목록에 추가한다.
// 4. 완료체크 혹은 체크해제시 해당 로컬스토리지 목록에 적용한다.
let doList ;
let toDoList;
let delbtn;

function initialize(){
    let toDostorage = localStorage.getItem('toDo');
    let doStorage = localStorage.getItem('do');
    doList = document.querySelector('div>div:nth-of-type(2)>ol');
    toDoList = document.querySelector('div>div:nth-of-type(1)>ol');
    
    if(toDostorage!=null || doStorage!==''){
        toDoList.innerHTML=toDostorage;
    } 
    if(doStorage!=null || doStorage!==''){
        doList.innerHTML=doStorage; 
    }
    let doElements = doList.querySelectorAll('li>label>input');
            // let doElements = selectAll(doListt);
    let toDoElements = toDoList.querySelectorAll('li>label>input');
            // let toDoElements = selctAll(todoListt);
    doElements.forEach(each=>{
        each.checked=true;
        each.addEventListener('click',()=>check(each));
        // doElements.forEach(addCheckEvent);
        
    });
        toDoElements.forEach(each=>{
        each.addEventListener('click',()=>check(each));
        // toDoElements.forEach(addCheckEvent);
    }); 
    
    document.querySelectorAll('li>button').forEach(each=>{
        each.addEventListener('click',(e)=>delToDo(e));
    })
}



// function selectAll(elem){
//     return elem.querySelectorAll('li>label>input');
// }
// function addCheckEvent(elem){
//     elem.addEventListener('click',()=>(elem));
// }
function delToDo(elem){
    let button = elem.target;
    let li = button.parentElement;
    li.remove()
    toDoList = document.querySelector('div>div:nth-of-type(1)>ol');
    doList = document.querySelector('div>div:nth-of-type(2)>ol');
    localStorage.setItem('do',doList.innerHTML);
    localStorage.setItem('toDo',toDoList.innerHTML);
}

function add(){
    let work = document.getElementById('work').value;
    console.log(work);
    
    let toDo = document.createElement('li');
    let label = document.createElement('label');
    let input = document.createElement('input');
    delbtn = document.createElement('button');
    delbtn.innerText="❌";
    delbtn.addEventListener("click",(e)=>delToDo(e));
    let textData = document.createTextNode(work);
    console.log(textData);
    
    input.type='checkbox';
    // input.setAttribute('onclick','check(this)'); //bad case
    input.addEventListener('click',()=>check(input)); //best case
    label.appendChild(input);
    label.appendChild(textData);
    toDo.appendChild(label);
    toDo.appendChild(delbtn);
    console.log(label);
    let todoListt = document.querySelector('div>div:nth-of-type(1)>ol')
    todoListt.appendChild(toDo);
 

    localStorage.setItem('toDo',todoListt.innerHTML);

}
function check(elem){
    doList = document.querySelector('div>div:nth-of-type(1)>ol');
    toDoList = document.querySelector('div>div:nth-of-type(2)>ol');
   
    let epp = elem.parentElement.parentElement;
    if(elem.checked===true){
        toDoList.appendChild(epp);

        // 할일 완료
    }else if(elem.checked === false){
        doList.appendChild(epp);
        
        // 할일로 복구
    }
    
    localStorage.setItem('toDo',doList.innerHTML);
    localStorage.setItem('do',toDoList.innerHTML);
}



//      if(elem.checked===true){
//         document.querySelector('div>div:nth-of-type(2)>ol').appendChild(elem.parentElement.parentElement);
//     }else if(elem.checked===false){
//         document.querySelector('div>div>:nth-of-type(1)>ol').appendChild(elem.parentElement.parentElement);
//     }
// }