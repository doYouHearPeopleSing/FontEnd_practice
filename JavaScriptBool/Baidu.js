/**
 * 比较版本号
 * @param version1 string字符串 
 * @param version2 string字符串 
 * @return int整型
 */
function compare( version1 , version2 ) {
    // write code here    
    let array1 = version1.split('.');
    let array2 = version2.split('.');
    let i = 0;
    let len = array1.length > array2.length ? array1.length:array2.length;
    while(len) {
        if(parseInt(array1[i],10) < parseInt(array2[i],10))
        {
            return -1;
        }
        
        if(parseInt(array1[i],10) > parseInt(array2[i],10) )  {
            return 1;
        }
        i++;
        len--;    
    }
    
    if(array1.length > array2.length) {
        return 1;
    }else if(array1.length < array2.length) {
        return -1
    }
    return 0;    
}


