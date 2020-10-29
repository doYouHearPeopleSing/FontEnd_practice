var reverse = function(x) {
    
    const limitMax = Math.pow(2,31) - 1;
    const limitMin = -Math.pow(2,31);    
    let result;
    
    const n = Number(String(Math.abs(x)).split('').reverse().join(''));
    
    result = (x > 0) ?n:-n;   
   
    
    if(result <= limitMax && result >= limitMin ) {
        return result;
    }else {
        return 0;
    }
};