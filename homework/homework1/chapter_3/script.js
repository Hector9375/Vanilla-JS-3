    const STUDENT = [{
        "name": "Hector",
        "age": 30,
        "jpb": "student",
        "height": 181,
        "weight": 100,
        "main": "javascript",
        "sub": "server",
    },
    {   
        "name": "Nullzing",
        "age": 31,
        "job": "student",
        "height": 160,
        "weight": 60,
        "main": "javascript",
        "sub": "client"
    }]
    console.log(STUDENT[0].name);
    console.log(STUDENT[1].name);
    
    let asm = {}
    loop_top: for(let i = 0; i < STUDENT.length;i++){
        let values = Object.values(STUDENT[i]);
        console.log(i);
        for (let j = 0; j < values.length;j++){
        if(values[j]==='Hector'){
                asm = STUDENT[i];
                break;
            }
        }
    }
    console.log(asm);
//     let asm = {}
// loop_top : for(let i = 0; i < STUDENT.length;i++){
//     let values = Object.values(STUDENT[i]);
//     console.log(i);
//     for(let j = 0; j < values.length; j++){
//     if(values[j]==='Hector'){
//         asm = STUDENT[i];
//         break ;
//         }
//     }
// }
// console.log(asm);
