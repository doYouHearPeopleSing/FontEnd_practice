const arrTest = [10,9,8,7,6,5,4,3,2,1]

const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1,
    EQUALS: 0
}

function defaultCompare (a,b) {
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}


// bubbleSort

function bubbleSort (array,compareFn = defaultCompare) {
    const { length } = array;
    for(let i = 0;i < length; i++) {
        for(let j = 0;j < length - 1; j++) {
            if(compareFn(array[j],array[j+1]) === Compare.BIGGER_THAN)  {
                swap( array,j,j+1 )
            }
        }
    }
    return array
}


// selectionSort

function selectionSort (array,compareFn = defaultCompare) {
    const { length } = array
    let indexMin
    for(let i = 0; i < length - 1;i++) {
        indexMin = i
        for( let j = i; j < length;j++) {
            if(compareFn(array[indexMin],array[j]) === Compare.BIGGER_THAN) {
                indexMin = j
            }
        }
        if (i !== indexMin) {
            swap(array,i,indexMin)
        }
    }
    return array;
}


// MergeSort
function mergeSort(arr) {  //采用自上而下的递归方法
    var len = arr.length
    if(len < 2) {
        return arr
    }
    var middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle)

    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right)
{
    var result = []
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }

    while (left.length)
        result.push(left.shift())

    while (right.length)
        result.push(right.shift())
    
    return result
}


//quickSort

function quickSort(arr, left, right) {
    var len = arr.length,
        partitionIndex,
        left = typeof left != 'number' ? 0 : left,
        right = typeof right != 'number' ? len - 1 : right

    if (left < right) {
        partitionIndex = partition(arr, left, right)
        quickSort(arr, left, partitionIndex-1)
        quickSort(arr, partitionIndex+1, right)
    }
    return arr
}

function partition(arr, left ,right) {     // 分区操作
    var pivot = left,                      // 设定基准值（pivot）
        index = pivot + 1
    for (var i = index; i <= right; i++) {
        if (arr[i] < arr[pivot]) {
            swap(arr, i, index)
            index++;
        }        
    }
    swap(arr, pivot, index - 1)
    return index-1
}

function swap(arr, i, j) {
    var temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

console.log(quickSort(arrTest))

