const arr = [3][3];

for(let i = 0;i < 3; i++) {
    for( let j = 0; j < 3; j++) {
        arr[i][j] = 1;
    }
}
// that is wrong
console.log(arr);