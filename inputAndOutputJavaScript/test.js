// const readline = require('readline');
// const r1 = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })
// line 只是一个字符串，不能保证正确的提取数字，所以我们要使用 arr
// function oneLineRead() {
//     r1.on('line',function(line) {
//         var arr = line.split(',');
//         // split 是必须的，当然他可以用空格或者逗号作为分割的标准
        
//         console.log(`${parseInt(arr[0])+parseInt(arr[1])}`);
//         // parseInt() 也是必须的，因为我们需要把字符串转化为数字进行加减等操作
//     })  
// }



var readline = require('readline');

//  创建一个readline接口实例
var readlineTest = readline.createInterface({
    
    input: process.stdin,
    output: process.stdout
    
});

var linesArray=[];//该数组用来存储输入的内容

var linesArrayIndex=0;//设置存储输入内容数组的索引初始值

var resultArray=[];//该数组用来存储除输入内容第一行外其他行的输入内容

readlineTest.on('line', function(line){
    
    //将存储输入内容的数组linesArray的第一个元素linesArray[0]的值设置为允许输入的行数
    if(linesArrayIndex==0){
        linesArray[linesArrayIndex]=Number(line);
        //打印控制台输入的第一行内容："允许输入的行数"
        console.log("允许输入的行数: "+linesArray[0]);
    }
    
    //将每一行的内容作为一个单元写入数组linesArray，并且每写入一个元素则数组下标linesArrayIndex自增1
    linesArray[linesArrayIndex]=line;
    linesArrayIndex++;
    
    //调用Array对象的slice()方法返回linesArray数组的子数组(该子数组的内容为: 除linesArray数组第一个元素外的其他元素)
    //将子数组的每个元素依次添加至结果数组resultArray
    for(var i in linesArray.slice(1)){
        resultArray[i]=linesArray.slice(1)[i];
    }
    console.log(resultArray);
    //当输入内容的行数等于linesArray数组的第一个元素(即允许输入的行数)时，则关闭输入流readline
    if(resultArray.length==linesArray[0]){
        //打印输出整合在数组resultArray中的输入内容
        // console.log(resultArray);
        readlineTest.close();//关闭输入流
    }
    
});

//当readlineTest执行'close'命令时，输入流关闭，程序结束。
// readlineTest.on('close', function() {
    
//     process.exit(0);
    
// });
