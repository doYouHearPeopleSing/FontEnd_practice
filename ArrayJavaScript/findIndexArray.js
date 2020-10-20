const array1 = [8,158,1,1,1,190,44,180];

// const isLargeNumber = (Element) => Element > 150;

function isBiggerNumber (element,index,array) {
    return element > 150 && index > 3;
}
// console.log(array1.findIndex(isLargeNumber));

console.log(array1.findIndex(isBiggerNumber));