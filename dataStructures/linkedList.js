class Node {
    constructor(element) {
        this.element = element;
        this.next    = undefined;
    }    
}

class linkedList {
    constructor() {
        this.count = 0;
        this.head  = undefined;
    }

    push(element) {
        const node = new Node(element);
        let current;
        if (this.head == null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next =  node;
        }
        this.count++;
    }

    removeAt(index) {// 此函数中仅仅给了 index 这一个参数
        if(index>=0&&index<this.count) {
            let current = this.head;
            if(index === 0) {
                this.head = current.next;
            } else {
                const previous = this.getElementByIndex(index - 1);
                current = this.getElementByIndex(index);
                previous.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }

    getElementByIndex(index) {
        if( index >= 0 && index < this.count ) {
            let current = this.head;
            for(let i = 0;i < index;i++) {
                current = current.next;                    
            }
            return current;
            }
        return undefined;
    }

    insert(element,index) {
        if(index >=0 && index<this.count) {
            const newNode = new Node;
            if(index === 0) {                
                newNode.element = element;
                newNode.next = this.head;
                this.head = newNode;
            } else if(index>0){
                newNode.element = element;
                const before = this.getElementByIndex(index-1);
                newNode.next = this.getElementByIndex(index);
                before.next = newNode;
            }
            this.count++;
        }
    }

    indexOf(element) {        
        if(this.head.element === element) {
            return 0;
        }
        let current = this.head;
        for(let i = 0 ;i <this.count && current != null;i++)  {
            if(current.element === element) {
                return i;
            }
            current = current.next;
        }
        return -1;    
    }

    toString() {
        if(this.head === undefined) {
            return '';
        }
        let current = this.head.next;
        let objString = `${this.head.element}`;
        for(let i = 1;i<this.count && current != null; i++) {
            objString = `${objString},${current.element}`;
            current = current.next
        }
        return objString;
    }
}

const List = new linkedList;
List.push(2018);
List.push(2020);
List.push(2021);
List.insert(2017,0);
List.insert(2019,2);

const result = List.toString();
console.log(result);

