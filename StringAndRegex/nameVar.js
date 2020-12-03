/*
 * @Author: your name
 * @Date: 2020-11-21 13:43:57
 * @LastEditTime: 2020-12-03 15:57:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myGitHub\String\nameVar.js
 */



 function toHumpA(name) {
    return name.replace(
        /_(\w)/g, 
        
        function(all, letter){        
            return letter.toUpperCase();
        }
    
    );
}

function toHumpB(name) {
   
    return name
        .split('_')
        .map( (item) => item[0].toUpperCase() + item.substring(1) )
        .join('');
      
}

function toHumpC(name) {

    const reArr = []
    const arr = name.split(`_`)    

    for(let i = 0; i < arr.length; i++) {
        
        let item = arr[i]

        if(i > 0) {           
            let pushItem = item[0].toUpperCase() + item.substring(1)
            reArr.push(pushItem)
        }else{
            reArr.push(item)
        }

    }

    return reArr.join('')
}

function toHumpD(name) {
    return name.replace(
        /_(\w)/g, 
        
        function(all,char){                     
            return char.toUpperCase()
        }
    
    );
}

function toLineA(name) {
    return name.replace(/([A-Z])/g,"_$1").toLowerCase();
}

function toLineB(name) {
    return name.replace(
        /([A-Z])/g,

        function(all,char) {
            return `_${char.toLowerCase()}`
        }

    )
}

function allTurn(name) {    

    if(name.includes(`_`)) {
        return name.replace(
            /_(\w)/g,

            function(all,char) {
                return char.toUpperCase()
            }
        )
    }else{
        return name.replace(
            /([A-Z])/g,
            
            function(all,char) {
                return `_${char.toLowerCase()}`
            }
        )
    }
}


const str_ = 'user_name_first'

const hump = `userNameFirst`

console.log(allTurn(hump))

 

 
