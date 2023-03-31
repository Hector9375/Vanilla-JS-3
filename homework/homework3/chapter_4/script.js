function random(){
    let num = parseInt(Math.random(10)*10);
    let answer = document.getElementById('answer');
    answer.innerText='';
    if(num%3===0){
        answer.innerText='안성민!'
    }else{
        answer.innerText='박누리!'
    }
}