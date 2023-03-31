let newWindow = window.open();
let boardList = [{
    "no":i++,
    "title":"first post",
    "content":"main text",
    "writer":"smart",
    "password":"1234",
    "createAt": new Date()
},
];

function createNewLine(newContent){
     
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

    }


function add() {
    let title = document.getElementById('post-name').value;
    let writer = document.getElementById('post-writer').value;
    let content = document.getElementById('post-content').value;
    let password = document.getElementById('post-password').value;
    let topNumber = boardList[boardList.length-1].no+1;
       
    let newContent = {
        "no":topNumber,
        "title":title,
        "writer":writer,
        "createAt": new Date(),
        "content":content,
        "password":password,
    }
    boardList.push(newContent);
    createNewLine(newContent);

}
function initialize() {
   boardList.forEach(each=>createNewLine(each)); 

}

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
        let write = newWindow.prompt('Please enter a text!');
        let psW = newWindow.prompt('Enter your password to edit!');
        
        for(let i = 0; i < boardList.length; i++){
                if (boardList[i].no===content.no){
                    if(boardList[i].password===psW){
                        boardList[i].title = title;
                        boardList[i].content = write;
                        refrash();
                        newWindow.document.body.innerText=JSON.stringify(content);
                        
                    }
                    
                }  
        }
    })
}
function refrash() {
    document.getElementsByClassName('board-list')[0].innerText='';
    initialize();
}

function DeltePost(no){
    boardList = boardList.filter((each)=> each.no !== no);
    refrash();
}




