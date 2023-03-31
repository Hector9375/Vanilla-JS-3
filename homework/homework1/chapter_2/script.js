let arr = [];
    for(let i = 0; i < 9; i++){
        arr[i] = []
        for(let j = 1; j < 9; j++){
            let x = j + 1;
            let y = i + 1;
            arr[i][j] = `${x} X ${y} = ${x*y}`
        }
    }
    console.table(arr);
