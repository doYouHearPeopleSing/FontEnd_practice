const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

const setB = new Set();
setB.add(1);
setB.add(2);
setB.add(5);

const union = (setA,setB) => {
    const unionAll = new Set();
    setA.forEach(element => {
        unionAll.add(element);
    });
    setB.forEach(element =>{
        unionAll.add(element);
    });
    return unionAll;
}
console.log(union(setA,setB));

const intersection = (setA,setB) => {
    const resultSet = new Set();
    setA.forEach(element =>{
        if(setB.has(element)) {
            resultSet.add(element);
        }
    });
    return resultSet;
}
intersection(setA,setB);

const difference = (setA,setB) => {
    const difference = new Set();
    setA.forEach(element => {
        if(!setB.has(element)) {
            difference.add(element);
        }
    });
    return difference;
}
console.log('============');
console.log(difference(setB,setA));