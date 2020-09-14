

function compare(value1,value2) {
    if(value1 > value2) {
        return 1;
    } else if( value1 < value2) {
        return -1;
    } else {
        return 0;
    }
}

const firstArray = [6,7,100,1000];
const secondArray = [3,4,8,9];

const a3 = firstArray.concat(secondArray);
// console.log(a3.sort(compare));

var result = [];
var ind1 = 0;
var ind2 = 0;

while( ind1<firstArray.length && ind2<secondArray.length) {
    if(firstArray[ind1] <= secondArray[ind2]) {
        result.push(firstArray.slice(ind1,ind1+1)[0]);
        ind1++;
    } else {
        result.push(secondArray.slice(ind2,ind2+1)[0]);
        ind2++;
    }
}

while(ind1 <firstArray.length) {
    result.push(firstArray.slice(ind1,ind1+1)[0]);
    ind1++;
}

while(ind2<secondArray.length) {
    result.push(secondArray.slice(ind2,ind2+1)[0]);
    ind2++;
}



console.log(result);

