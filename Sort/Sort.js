const arrTest = [9,8,7,6,5,4,3,2,1];


function swapValue(num1,num2) {
    let temp = num1;
    num1 = num2;
    num2 = temp;
}

function bubbleSort(arr) {
    const len = arr.length;
    for(let i = 0; i< len - 1;i++) {
        for(let j = 0;j < len - 1 - i ;j++){
            if(arr[j] > arr[j+1]) {
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }        
    }
    console.log(arr);
}

function selectSort(arr) {
    const len = arr.length;
    let minIndex,temp;
    for(let i = 0;i <len - 1;i++) {
        minIndex = i;
        for(let j = i + 1;j <len;j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
        console.log(arr)
    }

    console.log(arr);
}

function insertSort(arr) {
    
    
}

insertSort(arrTest)


