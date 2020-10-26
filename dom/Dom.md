Dom 增删查改的相关方法
======

# Dom 增

## 创造一个新的元素作为新增的预备对象
```JavaScript
const divInsert = document.createElement('div');

createElement 接受的参数是 Dom 的对象类型，例如`p` / `div`
```

## 为原有的父元素插入一个新的子元素
从后面插


```JavaScript
parent.append(p);

ParentNode.append 方法在 ParentNode的最后一个子节点之后插入一组 Node 对象或 DOMString 对象

append() 没有返回值
```




从前面插


```JavaScript

parent.prepend(p);

ParentNode.prepend 方法可以在父节点的第一个子节点之前插入一系列 Node 对象或者 DOMString 对象
```

# Dom 删
## remove()
删除调用这个函数的节点

## removeChild()
```JavaScript
let user0 = document.getElementsByClassName('user')[0];
document.getElementById('users').removeChild(user0);
```
removeChild 方法接收一个参数，即要移除的节点，被移除的节点成为方法的返回值

## replaceChildren()
不加任何参数的调用，可以把该元素的子元素全部清除




# Dom 查
## 查询一个父元素的子元素数
```JavaScript
ParentNode.childElementCount
```
只读属性，返回一个无符号长整型数字

## 查询一个父元素的子元素

```JavaScript
ParentNode.firstElementChild;  //第一个子元素
ParentNode.lastElementChild;   // 最后一个子元素
ParentNode.children;           // 子元素的集合 HTMLCollection
```

关于子元素的集合 HTMLCollection：
`HTMLCollection.length` 只读属性，返回集合当中子元素的数目


# Dom 改

## 替换两个节点
```JavaScript
ParentNode.replaceChildren(...nodesOrDOMStrings) // 返回 undefined
```
`参数`:nodesOrDOMStrings


一组用于替换 ParentNode 现有后代的 Node 或 DOMString 对象。若没有指定替代对象时，ParentNode 的所有后代都将被清空