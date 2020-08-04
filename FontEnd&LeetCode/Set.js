class Set {
    constructor() {
        this.length = 0;
        this.items = {};
    }
    has(element) {
        return element in this.items;
    }
    add(element) {
        if(!this.has(element)) {
            this.items[element] = element;
            this.length++;
            return true;
        }
        return false;
    }
    delete(element) {
        if(this.has(element)) {
            delete this.items[element];
            this.length--;
            return true;
        }
        return false;
    }
    size() {
        return this.length;
    }
    values() {
        return Object.values(this.items);
    }
    union(otherSet) {
        const unionSet = new Set;
        this.values().forEach(value => unionSet.add(value));
        otherSet.values().forEach(value => unionSet.add(value));
        return unionSet;
    }
    intersection(otherSet) {
        // otherSet = new Set;
        const intersection = new Set;
        const values = this.values();
        for( let i = 0;i<values.length;i++) {
            if(otherSet.has(values[i])) {
                intersection.add(values[i])
            }
        }
        return intersection;
    }
    difference(otherSet) {
        const differenceSet = new Set;
        this.values().forEach(value => {
                if(!otherSet.has(value)) {
                    differenceSet.add(value);
                }
            }
        )
        return differenceSet;
    }
    isSubSetof(otherSet) {
        if(this.size() > otherSet.size()) {
            return false;
        }
        let isSubset = true;
        this.values().every(value => {
            if(!otherSet.has(value)) {
                isSubset = false
                return false;
            }
            return true
        });
        return isSubset;
    }
}
const set = new Set;
set.add(1);
set.add(2);
set.add(3);
set.add(2020);
console.log(set);
console.log(set.has(3));
console.log(set.has(5));
console.log('========');
console.log(set.values());
console.log('========');

const set2 = new Set;
// set2.add(2015);
// set2.add(2016);
set2.add(1);
set2.add(2019);
set2.add(2020);
const setAll = set.intersection(set2);
console.log(setAll.values());

let setDifference = new Set;
setDifference = set.difference(set2);
console.log(setDifference.values());
console.log(set2.isSubSetof(set));


