function gugudan(number){
    let answer = document.getElementById('answer');
    answer.innerText='';
    for(let i = 1; i <= 9; i++){
        let line = document.createElement('p');
        line.textContent += `${number} X ${i} = ${number*i}`
        answer.appendChild(line);
    }
}