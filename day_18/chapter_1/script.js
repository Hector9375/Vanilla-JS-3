let newWindow = window.open();

let newBoardList = [];

let i = 1;
let boardList = [{
    "no":i++,
    "title":"first post",
    "content":"main text",
    "writer":"smart",
    "password":"1234",
    "createAt": new Date()
},
];


function createNewLine(newContent) {
     
        let lineWrapper = document.createElement('div');
        let no = document.createElement('div');
        let title = document.createElement('div');
        let writer = document.createElement('div');
        let createAt = document.createElement('div');
        lineWrapper.className='board-line';
        no.className='no';
        title.className='board-title';
        writer.className='board-writer';
        createAt.className='board-create-at';
        no.innerText=newContent.no;
        title.innerText=newContent.title;
        writer.innerText=newContent.writer;
        createAt.innerText=newContent.createAt;
        lineWrapper.appendChild(no);
        lineWrapper.appendChild(title);
        lineWrapper.appendChild(writer);
        lineWrapper.appendChild(createAt);
        document.getElementsByClassName('board-list')[0].appendChild(lineWrapper);
        lineWrapper.addEventListener('click',()=>viewContent(newContent));

        localStorage.setItem("new-board", JSON.stringify(newBoardList));
        
    }


function add() {
    let title = document.getElementById('post-name').value;
    let writer = document.getElementById('post-writer').value;
    let content = document.getElementById('post-content').value;
    let password = document.getElementById('post-password').value;
    let topNumber = 0;
    if( newBoardList.length === 0){
        topNumber++; 
    }else{
        console.log(newBoardList);
        topNumber = newBoardList[newBoardList.length-1].no+1;
    }
    
    let newContent = {
        "no":topNumber,
        "title":title,
        "writer":writer,
        "createAt": new Date(),
        "content":content,
        "password":password,

        // new Date()
    }
    newBoardList.push(newContent);
    if( Math.ceil(newBoardList.length/pageSize) > totalPageCount) { // 추가한 모든글 갯수가 , 변수인 모든글 갯수보다 크면 토탈카운트 페이지 증가++
        createPageNumberBtn(++totalPageCount);
        changePage(totalPageCount);
    }else{
        createNewLine(newContent);
    }
}


// function save(){
//     let no = document.getElementById('no').value;
//     let title = document.getElementById('post-name').value;
//     let writer = document.getElementById('post-writer').value;
//     let content = document.getElementById('post-content').value;
//     let password = document.getElementById('post-password').value;
//         boardList.push({no:no, title:title, writer:writer, content, password:password});
// }
// 페이지 번호
let pageNo = 1;

// 페이지 사이즈 - 한페이지에 보여질 글 갯수
let pageSize = 10;

// 총 페이지 = 모든 글 갯수/ 페이지 사이즈의 정수 올림
let totalPageCount = Math.ceil(newBoardList.length/pageSize);

function initialize() {
    let newBListStorage = localStorage.getItem('new-board');
    if (newBListStorage !== null) {
        newBoardList = JSON.parse(newBListStorage); 
    }else{
        newBoardList;
    }
    
    totalPageCount = Math.ceil(newBoardList.length/pageSize);
    


    /*
        pageNo = 1 / index = 0
        pageNo = 2 / index = 1
        pageNo = 3 / index = 2
        pageNo = 4 / index = 3
        */
        let index = (pageNo-1) * pageSize
        for(let i = 0; i < pageSize;i++){
            if((index + i) === newBoardList.length){
                break;
            }
            createNewLine(newBoardList[index+i]);
        }
        for(let i = 0; i < totalPageCount; i++) {
            createPageNumberBtn(i+1);
        }
}

function prevBtn() {
    if(pageNo > 1){
        pageNo--;
        changePage(pageNo);
    }
    
    addEventListener("click",()=> prevBtn);
}

function nextBtn() {
    if(pageNo < totalPageCount){
        pageNo++;
        changePage(pageNo);
    }
    addEventListener("click",()=> nextBtn);
}


// function saveBoardList(conten) {
//     localStorage.setItem("borad-list", JSON.stringify(content));
//     let savedBoardList = localStorage.getItem(content);
//     console.log(savedBoardList);
//     if (saveBoardList !== null) {
//       const parsedBoardList = JSON.parse(savedBoardList);
//       console.log(parsedBoardList);      
//     }
// }

function createPageNumberBtn(num){
    let numberWrapper = document.createElement('span');
    let numberTextNode = document.createTextNode(num);
    numberWrapper.appendChild(numberTextNode);
    
    numberWrapper.addEventListener('click' ,()=>{
        console.log(`click!!!!!!!!${num}`)
        changePage(num);
    })
    document.getElementsByClassName('page-number')[0].appendChild(numberWrapper);
    localStorage.setItem("new-board", JSON.stringify(newBoardList));
}

function changePage(num) {
    pageNo = num
    document.getElementsByClassName('board-list')[0].innerText='';
    document.getElementsByClassName('page-number')[0].innerText='';
    initialize();
    localStorage.setItem("new-board", JSON.stringify(newBoardList));

}
/* 숫자 버튼 클릭시 페이지 번호에 맞게 이동 */

function viewContent(content){
    newWindow = window.open();
    newWindow.document.body.innerText=JSON.stringify(content);
    let editbtn = document.createElement('button');
    let delbtn = document.createElement('button');
    
    editbtn.innerText = ("edit");
    delbtn.innerText = ("delete");
    
    newWindow.document.body.appendChild(editbtn);
    newWindow.document.body.appendChild(delbtn);
    delbtn.addEventListener('click', () => {
        let psw = newWindow.prompt('Please enter a password.')
        if( psw === content.password){
        DeltePost(content.no);
        }else{
            newWindow.alert('Passwords do not match!')
    }
        newWindow.close()
    });
    editbtn.addEventListener('click', () => {
        let title = newWindow.prompt('Please enter a title!');
        let write = newWindow.prompt('Please enter text!');
        let psW = newWindow.prompt('Enter your password to edit!');
        
        for(let i = 0; i < newBoardList.length; i++){
                if (newBoardList[i].no===content.no){
                    if(newBoardList[i].password===psW){
                        newBoardList[i].title = title;
                        newBoardList[i].content = write;
                        refrash();
                        newWindow.document.body.innerText=JSON.stringify(content);
                        newWindow.close();
                        initialize();
                    }
                }  
        }
    })
    localStorage.setItem("new-board", JSON.stringify(newBoardList));
    
}

function refrash() {
    document.getElementsByClassName('board-list')[0].innerText='';
    document.getElementsByClassName('page-number')[0].innerText='';
    localStorage.setItem("new-board", JSON.stringify(newBoardList));
}

function DeltePost(no) {
    newBoardList = newBoardList.filter((each)=> each.no !== no);
    refrash();
    if( Math.ceil(newBoardList.length/pageSize) < totalPageCount ) {
        if(totalPageCount-1 != 0){
        totalPageCount--; 
        }
    }
    changePage(totalPageCount);
        
}
        // changePage(totalPageCount === 0? 1:totalPageCount);
