const console = require("console");

function solutonOfQuestion(array,num) {
    let i = 0;
    let j;
    let answerAll = [];    
    for(i;i<array.length;i++){
        for(j = i;j<array.length;j++){
            if(array[i] === num - array[j] && i !== j){                
                let answer = [i,j];
                answerAll.push(answer);                
            }
        }
    }
    if(answerAll.length === 0){
        console.log('no answer');
        return ;
    }    
    console.log(answerAll.length);
    console.log(answerAll);    
}  
/**
 * 以上为函数，以下为实例测试
 */
let testArray = [1,2,3,4,5,6];
let testNum = 5;
solutonOfQuestion(testArray,testNum);

  