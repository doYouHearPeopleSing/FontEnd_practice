const arr = [7,9,3,4,5,5,1000];

const found = arr.find(item => item > 4);

// console.log(found);

const result = arr.find(
    function (item,index) {
        // callback 必须有一个返回值，且这个返回值是 item
        return item > 3 && index > 2;
    }
)
console.log(`------`);
console.log(result)