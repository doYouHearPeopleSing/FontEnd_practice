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


# JavaScript 原型链


## 原型的概念
每个对象都会在其内部初始化一个属性，就是prototype(原型)。原型就是一个模板，更准确的说是一个对象模板

## 原型链是什么？


    
# JavaScript 实现继承的几种不同方式


# JavaScript 异步编程

# JavaScript Promise















