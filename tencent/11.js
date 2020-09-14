function compare(value1,value2) {
    if(value1 > value2) {
        return 1;
    } else if( value1 < value2) {
        return -1;
    } else {
        return 0;
    }
}

    var firstArray = readline().split(',');
    var secondArray = readline().split(',');
    
    var result = firstArray.concat(secondArray);
    print(result.sort(compare));


 