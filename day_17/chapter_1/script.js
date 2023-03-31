toDoList();

function toDoList(){
    document.querySelector('form').addEventListener('submit', addToDo);
    document.getElementById('clear').addEventListener('click', clearTodoList);
    document.querySelector('ul').addEventListener('click', deleteOrCheck);
}

function deleteOrCheck(e){
    if(e.target.className == 'delete')
        deleteToDo(e); // x 버튼을 누르면 목록에서 삭제 
    else{
        checkToDo(e); // 체크박스를 클릭한 경우 글씨색 변경
    }
}

function deleteToDo(e){     // x 버튼을 누르면 목록에서 항목 삭제
    let remove = e.target.parentNode;
    let parentNode = remove.parentNode;
    parentNode.removeChild(remove);
}

function checkToDo(e){  // 체크 박스 클릭한 경우 글씨색 변경
    let todo = e.target.nextSibling;
    if(e.target.checked){
        todo.style.color = "#dddddd";
    } else {
        todo.style.color = "000000";
    }
}

function clearTodoList(e) {  // 목록 전체 삭제
    let ul = document.querySelector('ul').innerHTML = '';
}

function addToDo(e){  // 새로운 할 일 추가하는 경우
    e.preventDefault()
    let toDovalue = document.querySelector('input');
    if(toDovalue.value !== '')
        addTask(toDovalue.value);
        toDovalue.value = ''; // 입력창 비워주기
}

function addTask(){
    let ul = document.querySelector('ul');
    let li = document.querySelector('li');
    let clear = document.getElementById('clear').value;
    console.log(clear);
    document.querySelector('.todolist').style.display = 'block';
}