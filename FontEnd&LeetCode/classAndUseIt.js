let Foo = class {
    constructor() {}
    bar() {
        return 'Hello , JavaScript class!';
    }
};

let instance = new Foo();
let result = instance.bar();
console.log(result);