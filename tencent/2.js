const obj = {"1":123,"2":234,"8":456};


var jsonstring = JSON.stringify(obj);
var new1string = jsonstring.replace('{','');
var new2string = new1string.replace('}','');
var finallString = new2string.replace('"','');
while( finallString.includes('"')) {
    var finallString = finallString.replace('"','');
}

console.log(finallString);
console.log(`========`);
var array = finallString.split(',')

var arrayIndex = [];
var arrayItem = [];

for(let i = 0;i<array.length;i++) {
    arrayIndex.push(array[i].split(':')[0]);
}

for(let i = 0;i<array.length;i++) {
    arrayItem.push(array[i].split(':')[1]);
}

const resultArray = [];

for(let i = 0;i<array.length;i++) {
    resultArray[arrayIndex[i] - 1] = parseInt(arrayItem[i]);
}

for(let i = 0;i<resultArray.length;i++) {
    if(resultArray[i] === undefined) {
        resultArray[i] = 0;
    }
}

console.log(resultArray);