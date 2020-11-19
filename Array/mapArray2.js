const arr = ['1','2','3'].map(parseInt);
console.log(arr);

const array = ['110','120','130'];
array.map(function (item,index,array) {
    console.log(`${item} is indexOf ${index} in A:${array
    }`)
})