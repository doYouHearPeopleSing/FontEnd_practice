# 设计思想
React Hooks 的设计目的，就是加强版函数组件，完全不使用"类"，就能写出一个全功能的组件

# 技术背景
React 的核心是组件。v16.8 版本之前，组件的标准写法是类（class）


但是 React 团队认为：组件不要变成复杂的容器，最好只是数据流的管道。开发者根据需要，组合管道即可。


组件的最佳写法应该是函数，而不是类

# Hook 的含义

Hook 这个单词的意思是"钩子"。

React Hooks 的意思是，组件尽量写成纯函数，如果需要外部功能和副作用，就用钩子把外部代码"钩"进来。 React Hooks 就是那些钩子。

你需要什么功能，就使用什么钩子。React 默认提供了一些常用钩子，你也可以封装自己的钩子

# Hook 的使用规则
Hook 就是 JavaScript 函数，但是使用它们会有两个额外的规则：

1. 只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。
2. 只能在 React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用。（还有一个地方可以调用 Hook —— 就是自定义的 Hook 中，我们稍后会学习到。）
# useState()

## 调用 useState 方法的时候做了什么? 
它定义一个 “state 变量”

## useState 需要哪些参数？ 
useState() 方法里面唯一的参数就是初始 state

## useState 方法的返回值是什么？
返回值为：当前 state 以及更新 state 的函数。

`useState()` 它让我们在 React 函数组件上添加内部 state

# useEffect()
useEffect 就是一个 Effect Hook，给函数组件增加了操作副作用的能力, 如更新 DOM 等
## useEffect() 需要哪些参数？ 
`useEffect()` 参数：
1. 第一个参数是一个函数 
2. 第二个参数是一个数组，指定了第一个参数（副效应函数）的依赖项
## useEffect() 的具体作用有哪些？
1. 获取数据（data fetching）
2. 事件监听或订阅（setting up a subscription）
3. 改变 DOM（changing the DOM）
4. 输出日志（logging）