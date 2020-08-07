const objOrign = {
    field1: 1,
    field2: undefined,
    field3: 'ConardLi',
    field4: {
        child: [1,2,3],
        child2: {
            child2_1: 'child2'
        }
    },
    field5: function(){
        return 1;
    }
}

function show(objOrign,objCopy) {
    console.log('---START---')
    console.log(objOrign);
    console.log('----COPY IS:----');
    console.log(objCopy);
    console.log('---END---');
}
function deepCloneA (obj) {
    return JSON.parse(JSON.stringify(obj));

}
function deepCloneB(target) {
    let resultClone = {};
    for(let key in target) {        
        resultClone[key] = target[key];
    }
    return resultClone;
};

function deepCloneC(target) {
   if(typeof target === 'object') {
       let  resultClone = Array.isArray(target) ? []:{};
       for(const key in target) {
           resultClone[key] = deepCloneC(target[key]);
       }
       return resultClone;
   } else {
       return target;
   }
};

const objCopyB = deepCloneC(objOrign);

objCopyB.field4.child2.child2_1 = 'test';

show(objOrign,objCopyB);

console.log(typeof objCopyB);








