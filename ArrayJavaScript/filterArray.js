const numbers = [1,2,3,4,5,6,7,8,9,10];

const result = numbers.filter(item => item > 3);

console.log(result);

const callResult = function(element,index) {
    return element >2 && index > 5;
}

console.log(numbers.filter(callResult));