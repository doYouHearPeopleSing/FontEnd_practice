function printRow(row) {
    let str = '*';
    for(let i = 0;i < row;i++) {
        str  += '*';
    }
    console.log(str);
}

function printT(col) {
    for(let i = 0; i < col; i++) {
        printRow(i);
    }
}

printT(5);

