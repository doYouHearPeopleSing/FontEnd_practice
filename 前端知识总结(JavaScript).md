JavaScript 面试问答题
======

# 什么是 JavaScirpt 内置对象？
### JavaScript 这门语言本身初始时提供的在全局范围的对象

## 标准内置对象分类
### 值属性
这些全局属性返回一个简单值，这些值没有自己的属性和方法

Infinity
NaN
undefined
globalThis
### 函数属性
全局函数可以直接调用，不需要在调用时指定所属对象，执行结束后会将结果直接返回给调用者

eval()
uneval()
isFinite()
isNaN()
parseFloat()
parseInt()
decodeURI()
decodeURIComponent()
encodeURI()
encodeURIComponent()
已废弃
escape()
unescape()

### 基本对象
顾名思义，基本对象是定义或使用其他对象的基础。基本对象包括一般对象、函数对象和错误对象。

Object
Function
Boolean
Symbol
### 错误对象
错误对象是一种特殊的基本对象。它们拥有基本的 Error 类型，同时也有多种具体的错误类型。

Error
AggregateError
EvalError
InternalError
RangeError
ReferenceError
SyntaxError
TypeError
URIError
### 数字和日期对象
用来表示数字、日期和执行数学计算的对象。

Number
BigInt
Math
Date
### 字符串
用来表示和操作字符串的对象。

String
RegExp
### 可索引的集合对象
这些对象表示按照    A索引值来排序的数据集合，包括数组和类型数组，以及类数组结构的对象。

Array
Int8Array
Uint8Array
Uint8ClampedArray
Int16Array
Uint16Array
Int32Array
Uint32Array
Float32Array
Float64Array
BigInt64Array
BigUint64Array
### 使用键的集合对象
这些集合对象在存储数据时会使用到键，包括可迭代的Map 和 Set，支持按照插入顺序来迭代元素。

Map
Set
WeakMap
WeakSet
### 结构化数据
这些对象用来表示和操作结构化的缓冲区数据，或使用 JSON （JavaScript Object Notation）编码的数据。

ArrayBuffer
SharedArrayBuffer
Atomics
DataView
JSON
### 控制抽象对象
控件抽象可以帮助构造代码，尤其是异步代码（例如，不使用深度嵌套的回调）。

Promise
Generator
GeneratorFunction
AsyncFunction
### 反射
Reflect
Proxy
### 国际化
ECMAScript核心的附加功能，用于支持多语言处理。

Intl
Intl.Collator
Intl.DateTimeFormat
Intl.ListFormat
Intl.NumberFormat
Intl.PluralRules
Intl.RelativeTimeFormat
Intl.Locale
WebAssembly
WebAssembly
WebAssembly.Module
WebAssembly.Instance
WebAssembly.Memory
WebAssembly.Table
WebAssembly.CompileError
WebAssembly.LinkError
WebAssembly.RuntimeError
### 其他
arguments


# Object.assign()


### Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
```
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }
```
# JavaScript 的继承

1. 原型链继承
```JavaScript
        function ParentClass (age) {
            this.name = 'kevin';
            this.age = age;
        }
     
        function ChildClass () {

        }

        ChildClass.prototype = new ParentClass();
```
2. 构造函数继承
```JavaScript
        function Car (names) {
            this.names = names;
        }
        function Benz (names) {
            Car.call(this,names);
            // 核心代码是SuperType.call(this)
            // 创建子类实例时调用SuperType构造函数
            // 于是SubType的每个实例都会将SuperType中的属性复制一份
        }
```
3. 组合继承

4. 原型式继承
5. 寄生式继承
6. 寄生组合式继承

7. ES6 类继承 extends


# 什么是[闭包]？
函数和对其周围状态（lexical environment，词法环境）的引用捆绑在一起构成闭包（closure）


**或者说**
**闭包就是能够读取其他函数内部变量的函数**


通俗的讲就是函数 a 的内部函数 b，被函数 a 外部的一个变量引用的时候，就创建了一个闭包。


闭包可以让我们从内部函数访问外部函数作用域。在 JavaScript 中，每当函数被创建，就会在函数生成时生成闭包。
和其他大多数现代编程语言一样，JavaScript也采用词法作用域（lexicalscoping），也就是说，函数的执行依赖于变量作用域，这个作用域是在函数定义时决定的，而不是函数调用时决定的。为了实现这种词法作用域，JavaScript函数对象的内部状态不仅包含函数的代码逻辑，还必须引用当前的作用域链。函数对象可以通过作用域链相互关联起来，函数体内部的变量都可以保存在函数作用域内，这种特性在计算机科学文献中称为“闭包”

## 闭包的两个作用：
1. 能够读取其他函数内部变量的函数
2. 可以让函数内部的变量一直保存在内存中

我们可以用一个最简单的闭包来演示：

```JavaScript
    function foo() {
        var a = 2;

        function bar() {
            console.log(a);
        }
        return bar;
    }

    var baz = foo();
    baz();
```
函数`bar()`的词法作用域能够访问`foo()`的内部作用域。然后我们将`bar()`函数本身当作一个值类型进行传递。

在这个例子中，我们将bar所引用的函数对象本身当作返回值。在`foo()`执行后，其返回值（也就是内部的`bar()`函数）赋值给变量`baz`并调用`baz()`，实际上只是通过不同的标识符引用调用了内部的函数`bar()`。`bar()`显然可以被正常执行。

但是在这个例子中，它在自己定义的`词法作用域`**以外**的地方执行。在foo()执行后，通常会期待foo()的整个内部作用域都被销毁，因为我们知道引擎有垃圾回收器用来释放不再使用的内存空间。由于看上去foo()的内容不会再被使用，所以很自然地会考虑对其进行回收。而闭包的`神奇`之处正是可以阻止这件事情的发生。事实上内部作用域依然存在，因此没有被回收。谁在使用这个内部作用域？原来是`bar()`本身在使用。

拜`bar()`所声明的位置所赐，它拥有涵盖`foo()`内部作用域的闭包，使得该作用域能够一直存活，以供`bar()`在之后任何时间进行引用。`bar()`依然持有对该作用域的引用，而这个引用就叫作闭包。因此，在几微秒之后变量`baz`被实际调用（调用内部函数`bar`），它可以访问**定义时的词法作用域**，因此它也可以如预期般访问变量`a`。这个函数在定义时的词法作用域以外的地方被调用。闭包使得函数可以继续访问定义时的词法作用域。


`JavaScript 闭包使函数拥有“私有”变量成为可能。`


闭包让我们即使在父函数关闭之后有权访问父作用域的函数


# 什么是 this?
`The JavaScript this keyword refers to the object it belongs to.`


JavaScript `this` 关键词指的是它所属的对象。


**它拥有不同的值，具体取决于它的使用位置：**


1. 在方法中，this 指的是所有者对象。
2. 单独的情况下，this 指的是全局对象。
3. 在函数中，this 指的是全局对象。
4. 在函数中，严格模式下，this 是 undefined。
5. 在事件中，this 指的是接收事件的元素。


`this`对象是在运行时基于函数的执行环境绑定的：在全局函数中，`this`等于`window`，而当函数被作为某个对象的方法调用时，`this`等于那个对象

# call()\apply()\bind() 三个函数的作用 

`通过 call()，我们能够在一个对象中使用属于另一个对象的方法`


`call()`方法接受的是参数列表，而`apply()`方法接受的是一个参数数组


apply 可以使用数组字面量（array literal），如 fun.apply(this, ['eat', 'bananas'])，或数组对象， 如  fun.apply(this, new Array('eat', 'bananas'))。


1. apply 、 call 、bind 三者都是用来改变函数的`this`对象的指向的；
2. apply 、 call 、bind 三者第一个参数都是`this`要指向的对象，也就是想指定的上下文；
3. apply 、 call 、bind 三者都可以利用后续参数传参；
4. bind 是返回对应函数，便于稍后调用；apply 、call 则是立即调用 。


# JavaScript 原型链


## 原型的概念
每个对象都会在其内部初始化一个属性，就是prototype(原型)。原型就是一个模板，更准确的说是一个对象模板

## 原型链是什么？
`JavaScript`是一种基于对象的语言，但在 ES6 之前是不支持继承的，为了具备继承的能力，JavaScript 在函数对象上建立了原型对象 prototype，并以函数对象为主线，从上至下，在JS内部构建了一条原型链。原型链把一个个独立的对象联系在一起，Object 则是所有对象的祖宗， 任何对象所建立的原型链最终都指向了 Object，并以 Object 终结。


简单来说，就是建立了变量查找机制，当访问一个对象的属性时，先查找对象本身是否存在，如果不存在就去该对象所在的原型连上去找，直到 Object 对象为止，如果都没有找到该属性才会返回 undefined。因此，我们可以通过原型链来实现继承机制。关于函数原型链请参考：认识原型对象和原型链

![原型链图片](https://img2018.cnblogs.com/blog/1090617/202001/1090617-20200115195412174-1235848744.jpg)
https://img2018.cnblogs.com/blog/1090617/202001/1090617-20200115195412174-1235848744.jpg


# JavaScript 实现继承的几种不同方式
对使用过基于类的语言 (如 Java 或 C++) 的开发人员来说，JavaScript 有点令人困惑，因为它是动态的，并且本身不提供一个 class 实现。（在 ES2015/ES6 中引入了 class 关键字，但那只是语法糖，JavaScript 仍然是基于原型的）。

当谈到继承时，JavaScript 只有一种结构：对象。每个实例对象（ object ）都有一个私有属性（称之为 __proto__ ）指向它的构造函数的原型对象（prototype ）。该原型对象也有一个自己的原型对象( __proto__ ) ，层层向上直到一个对象的原型对象为 null。根据定义，null 没有原型，并作为这个原型链中的最后一个环节。

几乎所有 JavaScript 中的对象都是位于原型链顶端的 Object 的实例。

尽管这种原型继承通常被认为是 JavaScript 的弱点之一，但是原型继承模型本身实际上比经典模型更强大。例如，在原型模型的基础上构建经典模型相当简单。


# JavaScript 判断类型的方法
## 简述
在 ECMAScript 规范中，共定义了 8 种数据类型，分为 `基本类型` 和 `引用类型` 两大类，如下所示：

```
基本类型：Undefined   Null   Boolean   Number   String   Symbol  BigInt

引用类型：Object
```

基本类型也称为`简单类型`，由于其占据空间固定，是简单的数据段，为了便于提升变量查询速度，将其存储在栈中，即`按值访问`。

引用类型也称为`复杂类型`，由于其值的大小会改变，所以不能将其存放在栈中，否则会降低变量查询速度，因此，其值存储在`堆(heap)`中，而存储在变量处的值，是一个指针，指向存储对象的内存处，即`按址访问`。引用类型除 Object 外，还包括 Function 、Array、RegExp、Date 等等。

鉴于 ECMAScript 是松散类型的，因此需要有一种手段来检测给定变量的数据类型。对于这个问题，JavaScript 也提供了多种方法，但遗憾的是，不同的方法得到的结果参差不齐。


## typeof

```JavaScipt
typeof'';                // string 有效
typeof 1;                // number 有效
typeof Symbol();         // symbol 有效
typeof true;             // boolean 有效
typeof undefined;        // undefined 有效
typeof null;             // object 无效
typeof [] ;              // object 无效
typeof newFunction();    // function 有效
typeof newDate();        // object 无效
typeof newRegExp();      // object 无效
```
# Node.js
`Node.js` 是一个基于 `Chrome V8` 引擎的 `JavaScript` 运行环境，它的运行不依赖于浏览器作为宿主环境，而是和服务端程序一样可以独立的运行，这使得 `JavaScript` 编程第一次从客户端被带到了服务端，`Node.js` 在服务端的优势是，它采用单线程和异步 `I/O` 模型，实现了一个高并发、高性能的运行时环境。相比传统的多线程模型，`Node.js` 实现简单，并且可以减少资源开销。

# Node.js 的核心模块有哪些？

# ES6(ES2015)

ES6 是 `ECMAScript 6.0` 的简写，即 `JavaScript`语言的下一代标准，已经在 2015年6月正式发布了，它的目标是让JS能够方便的开发企业级大型应用程序，因此，`ES6`的一些规范正在逐渐向`Java`、`C#` 等后端语言标准靠近。在 ES6 规范中，比较重大的变化有以下几个方面：

1. 新增 `let、const` 命令 来声明变量，和`var`相比，`let` 声明的变量不存在变量提升问题，但没有改变`JavaScript`弱类型的特点，依然可以接受任意类型变量的声明；`const` 声明的基础变量不允许在后续逻辑中改变，提高了`JavaScript`语法的严谨性。
2. 新增解构赋值、`rest` 语法、箭头函数等，这些都是为了让代码看起来更简洁，而包装的语法糖。
3. 新增模块化机制，这是 `JavaScript` 走向规范比较重要的一步，让前端更方便的实现工程化。
4. 新增类和继承的概念，配合模块化，`JavaScript` 也可以实现高复用、高扩展的系统架构。
5. 新增模板字符串功能，高效简洁，结束拼接字符串的时代。
6. 新增 `Promise` 机制，解决异步回调多层嵌套的问题。




# 箭头函数
箭头函数表达式的语法比函数表达式更简洁，并且没有自己的this

### 对于普通函数而言

1. 如果是该函数是一个构造函数，`this` 指针指向一个新的对象

2. 如果是该函数是一个对象的方法，则它的 `this` 指针指向这个对象

### 箭头函数的特殊性

https://kiwenlau.com/2019/06/18/arrow-function-this/

箭头函数不会创建自己的 `this` ,它只会从自己的作用域链的上一层继承 `this`

箭头函数this的定义：箭头函数中的this是在`定义`函数的时候绑定，而不是在`执行`函数的时候绑定

# 严格模式
ECMAScript 5的严格模式是采用具有限制性JavaScript变体的一种方式，从而使代码显示地 脱离“马虎模式/稀松模式/懒散模式“（sloppy）模式。


严格模式不仅仅是一个子集：它的产生是为了形成与正常代码不同的语义。


不支持严格模式与支持严格模式的浏览器在执行严格模式代码时会采用不同行为。


1. 严格模式对正常的 JavaScript语义做了一些更改。
2. 严格模式通过抛出错误来消除了一些原有静默错误。
3. 严格模式修复了一些导致 JavaScript引擎难以执行优化的缺陷：有时候，相同的代码，严格模式可以比非严格模式下运行得更快。
4. 严格模式禁用了在ECMAScript的未来版本中可能会定义的一些语法

