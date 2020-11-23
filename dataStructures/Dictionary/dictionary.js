function defaultToString(item) {
    if( item === null ) {
        return 'NULL';
    }else if(item === undefined) {
        return 'UNDEFINED';
    }else if(typeof item === 'string' || item instanceof String) {
        return `${item}`;
    }
    return item.toString();
}
class ValuePair {
    constructor(key,value) {
        this.key = key;
        this.value = value;
    }
    toString() {
        return `[${this.key}:${this.value}]`;
    }
}

class Dictionary {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }
    hasKey(key) {
        return this.table[this.toStrFn(key)] != null;
    }
    set(key,value) {
        if(key != null && value != null) {
            const tableKey = this.toStrFn(key);
            this.table[tableKey] = new ValuePair(key,value);
            return true;
        }
        return false;
    }
}
const dictionary = new Dictionary;
dictionary.set(`a`,1);
dictionary.set(`b`,2);
dictionary.set(`c`,3);
dictionary.set(`a`,2020);
dictionary.set(`c`,2021);

console.log(dictionary.hasKey(`b`));
console.log(dictionary);