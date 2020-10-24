//

https://ac.nowcoder.com/acm/contest/5649/
//  指定行数的输入
var inputNum = parseInt(readline());

var i = 0;

while(i <inputNum ) {
    var temp = readline().split(' ');
    var a = parseInt(temp[0]);
    var b = parseInt(temp[1]);
    print(a+b);
    i++;
}

// 单行输入的方法
while(line=readline()){
    var lines = line.split(' ');  //字符串转换为字符数组
    var a = parseInt(lines[0]);
    var b = parseInt(lines[1]);
    console.log(a+b);
}

// 多行输入，并且在特殊值处终止输入
while(line=readline()){
    var lines = line.split(' ');  //字符串转换为字符数组
    var a = parseInt(lines[0]);
    var b = parseInt(lines[1]);
    if( a == 0 && b == 0){
        break;
    }
    console.log(a+b);
}

// 不指定行数的多行输入，且在特殊值处终止输入
while(line = readline()) {
    var lines = line.split(' ');
    var result = 0;
    
    if( parseInt(lines[0]) == 0 ) {
        break;
    }
    
    for(var i = 1;i<lines.length ;i++) {
       result = result + parseInt(lines[i]);
    }
    
    print(result);
}

// 指定行数的多行输入和单行指定输入个数
var inputNum = parseInt(readline());

var i = 0;
while( i < inputNum ) {
    var result = 0;
    var lines = readline().split(' ');
    for( var j = 1;j<lines.length;j++) {
        result += parseInt(lines[j]);
    }
    print(result);
    i++;
}

// 指定输入个数的输入
while(line = readline()) {
    const lines = line.split(' ');
    var result = 0;
    var index = parseInt(lines[0]) + 1;
    for(var i = 1;i<index;i++) {
        result += parseInt(lines[i]);
    }
    print(result);    
}

//输入数据有多组, 每行表示一组输入数据
while(line = readline()) {
    const lines = line.split(' ');
    var result = 0;
    
    for(var i = 0;i<lines.length;i++) {
        result += parseInt(lines[i]);
    }
    print(result);    
}

// 关于字符串的输入和处理
const inputNum = parseInt(readline());

while(line = readline()) {
    const lines = line.split(' ');
    const arr = lines.sort();
    const result = arr.join(' ');
    print(result)
}

//多行字符串的输入和处理、输出
while(line = readline()) {
    const lines = line.split(' ');
    const arr = lines.sort();
    const result = arr.join(' ');
    print(result)
}

//以逗号分隔的字符串的输入和处理
while(line = readline()) {
    const lines = line.split(',');
    const arr = lines.sort();
    const result = arr.join(',');
    print(result)
}  