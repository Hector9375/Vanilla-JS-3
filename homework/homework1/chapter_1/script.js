function random(){
    let num = parseInt(Math.random(10)*10);
    let answer = documnet.getElementById('answer');
    answer.innerText=''
        if(num%2===0){
            answer.innerText='Hector'
        }else{
            answer.innerText='Nullzing'
        }
}