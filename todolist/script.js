let toDoList;
let toDo;

function initialize() {
    let toDostorage = localStorage.getItem('toDo');
    toDoList = document.querySelector('div>ol');
    if(toDostorage!=null){
        toDoList.innerHTML=toDostorage;
    } 
    let toDoElements = toDoList.querySelectorAll('li>label');
    toDoElements.forEach(each=>{
        each.addEventListener('click',()=>clickFunc(each))
    });
    toDoElements.forEach(each=>{
        each.addEventListener('dblclick',()=>dblClickFunc(each))
    });
    document.querySelectorAll('li>button').forEach(each=>{
        each.addEventListener('click',(e)=>delToDo(e));
    });
}

function add(){
    let work = document.getElementById('work').value;
    let [toDo, label, delbtn] = createWork();
    let textData = document.createTextNode(work);
    let list = document.querySelector('div>ol');
    let delText = document.createTextNode('❌')
    delbtn.appendChild(delText);
    delbtn.addEventListener("click", delToDo); // 삭제버튼 클릭시 리스트지우기 이벤트 실행    
    label.appendChild(textData);
    toDo.appendChild(label);
    toDo.appendChild(delbtn);
    list.appendChild(toDo);
    toDo.addEventListener('click', ()=> clickFunc(label));
    toDo.addEventListener('dblclick', ()=> dblClickFunc(label));
    localStorage.setItem('toDo',toDoList.innerHTML);

};
function clickFunc(elem) {
    
    elem.addEventListener('click', () => {
    elem.style.textDecoration = "line-through"
    })
};

function dblClickFunc(elem) {    
    elem.addEventListener('dblclick',()=>{
    elem.style.textDecoration = "none"
    })
};

//할일 목록 삭제
function delToDo(e){ //삭제 버튼 클릭시 
    let removeOne = e.target.parentElement;  //선택한 목록 한개만 지우기(부모 객체를 지운다)
    removeOne.remove();
    localStorage.setItem('toDo',toDoList.innerHTML);
};

function createWork() {
    let toDo = document.createElement('li');
    let label = document.createElement('label');
    let delbtn = document.createElement('button');

        return [toDo, label, delbtn];
};

// function clickFunc() {
//     toDo.addEventListener("click", ()=>{      // 클릭시 색변환
//     toDo.style.textDecoration = "line-through"
//     toDo.style.color = "gray"                  
//     })    
// }
// function dblClickFunc() {    
//     toDo.addEventListener("dblclick", ()=>{     // 더블클릭시 색 변환
//     toDo.style.textDecoration = "none"
//     toDo.style.color = "black"
//     })
// }