/*
 * @Author: your name
 * @Date: 2020-08-26 15:10:03
 * @LastEditTime: 2020-11-23 18:28:51
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \myGitHub\dataStructures\Map\map.js
 */

 
function defaultToString (item) {
    if(item === null) {
        return 'NULL' 
    } else if (item === undefined) {
        return 'UNDEFINED' 
    } else if (typeof item === 'string' || item instanceof String) {
        return `${item}`
    } 
    return item.toString() 
}

class ValuePair {
    constructor(key,value) {
        this.key = key 
        this.value = value 
    }
    toString() {
        return `[#${this.key}:${this.value}]`
    }
}

class Dictionary {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn 
        this.table = {} 
    }
    hasKey(key) {
        return this.table[this.toStrFn(key)] != null 
    }
    set(key,value) {
        if(key != null && value != null) {
            const tableKey = this.toStrFn(key) 
            this.table[tableKey] = new ValuePair(key,value) 
            return true 
        }
        return false 
    }

    get(key) {
        if ( this.hasKey(key) ) {
            return this.table[this.toStrFn(key)] 
        }
        return undefined 
    }

    size() {
        return Object.keys(this.table).length 
    }

    keyValues() {
        return Object.values(this.table) 
    }
}

const dictionary = new Dictionary() 
dictionary.set('a','A is for Apple') 
dictionary.set('b','B is for banana') 

// console.log(dictionary) 
console.log(dictionary.hasKey('a')) 

console.log(dictionary.get('a')) 

console.log(dictionary.size()) 

console.log(dictionary.keyValues()) 