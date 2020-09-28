# 什么是 React？
`React` 是用于构建用户界面的 `JavaScript` 库

# 为什么选用 React ?
React 是用 JavaScript 构建快速响应的大型 Web 应用程序的首选方式之一。它在 Facebook 和 Instagram 上表现优秀
# React 的特点？
1. 采用自上而下的单向数据流，方便我们追踪和管理数据，任何的 state 总是所属于特定的组件，而且从该 state 派生的任何数据或 UI 只能影响树中“低于”它们的组件。如果你把一个以组件构成的树想象成一个 props 的数据瀑布的话，那么每一个组件的 state 就像是在任意一点上给瀑布增加额外的水源，但是它只能向下流动
2. 使用一种叫做 JSX 的语法糖将 HTML 和 JavaScript 结合起来构建组件，组件状态和结果意义对应起来，实现模块化开发
3. 创建了高性能的虚拟 DOM，避免直接操作 DOM。即组件不是真实的 DOM 节点，而是存在于内存中的一种数据结构。所有的 DOM 变动都先在虚拟 DOM 上发生，然后再将实际发生变动的部分反映在真实 DOM 上
# React 声明式和组件化的特点
## 声明式
React 使创建交互式 UI 变得轻而易举。为你应用的每一个状态设计简洁的视图，当数据改变时 React 能有效地更新并正确地渲染组件。 

以声明式编写 UI，可以让你的代码更加可靠，且方便调试。

## 组件化
创建拥有各自状态的组件，再由这些组件构成更加复杂的 UI。

组件逻辑使用 JavaScript 编写而非模版，因此你可以轻松地在应用中传递数据，并使得状态与 DOM 分离


# React 虚拟 DOM

## 开发目的：
我们告诉 React 希望让 UI 是什么状态，React 就确保 DOM 匹配该状态

## Virtual DOM 的基本原理是什么？
在原生的 JavaScript 程序中，我们直接对 DOM 进行创建和更改，而 DOM 元素通过我们监听的事件和我们的应用程序进行通讯。

而 React 会先将你的代码转换成一个 JavaScript 对象，然后这个 JavaScript 对象再转换成真实 DOM。这个JavaScript 对象就是所谓的虚拟 DOM。

比如下面一段html代码：

```HTML
<div class="title">
      <span>Hello ConardLi</span>
      <ul>
        <li>苹果</li>
        <li>橘子</li>
      </ul>
</div>
```

在 React 可能存储为这样的JS代码：

```JavaScript
const VitrualDom = {
  type: 'div',
  props: { class: 'title' },
  children: [
    {
      type: 'span',
      children: 'Hello ConardLi'
    },
    {
      type: 'ul',
      children: [
        { type: 'li', children: '苹果' },
        { type: 'li', children: '橘子' }
      ]
    }
  ]
}
```

当我们需要创建或更新元素时，React 首先会让这个 VitrualDom 对象进行创建和更改，然后再将 VitrualDom 对象渲染成真实 DOM；

当我们需要对 DOM 进行事件监听时，首先对 VitrualDom 进行事件监听，VitrualDom 会代理原生的DOM事件从而做出响应。

## 为什么使用 Virtual DOM

React 为何采用 VitrualDom这种方案呢？

## 提高开发效率
使用 JavaScript，我们在编写应用程序时的关注点在于如何更新DOM。

使用 React，你只需要告诉 React 你想让视图处于什么状态，React 则通过 VitrualDom 确保 DOM 与该状态相匹配。你不必自己去完成属性操作、事件处理、DOM 更新，React 会替你完成这一切。

这让我们更关注我们的业务逻辑而非 DOM 操作，这一点即可大大提升我们的开发效率。

## 提升开发性能

直接操作DOM是非常耗费性能的，这一点毋庸置疑。但是 React 使用 VitrualDom 也是无法避免操作 DOM 的


如果是首次渲染，VitrualDom不具有任何优势，甚至它要进行更多的计算，消耗更多的内存


VitrualDom 的优势在于 React 的 Diff 算法和批处理策略，React 在页面更新之前，提前计算好了如何进行更新和渲染DOM。实际上，这个计算过程我们在直接操作DOM时，也是可以自己判断和实现的，但是一定会耗费非常多的精力和时间，而且往往我们自己做的是不如 React 好的。所以，在这个过程中React帮助我们"提升了性能"


所以，我更倾向于说，VitrualDom 帮助我们提高了开发效率，在重复渲染时它帮助我们计算如何更高效的更新，而不是它比 DOM 操作更快

# Diff 算法
1. 当你实际开发使用 React 的时候，在某个时间点 render() 函数创建了一棵 React 元素树,也就模拟一个虚拟 DOM 树，
2. 在下一个 state 或者 props 更新的时候，render() 函数将创建一棵新的 React 元素树, 也就模拟了一个新的虚拟 DOM 树，
3. 既然模拟出了新旧两棵 DOM 树, 那么如何高效的进行新旧两棵树的对比呢?当然是使用 Diff 算法


# React setState 机制

## setState 实际做了什么？
setState() 会对一个组件的 state 对象安排一次更新。当 state 改变了，该组件就会重新渲染

## setState 方法的异步
setState 有时表现出异步,有时表现出同步


setState 只在`合成事件`和`钩子函数`中是“异步”的，在`原生事件`和 `setTimeout` 中都是同步的

```
原生事件:  在 componentDidMount生命周期里边进行addEventListener绑定的事件
合成事件:  通过 JSX 方式绑定的事件，比如 onClick={() => this.handle()}
```

setState 的“异步”并不是说内部由异步代码实现，其实本身执行的过程和代码都是同步的，只是合成事件和钩子函数的调用顺序在更新之前，导致在`合成事件`和`钩子函数`中没法立马拿到更新后的值，形成了所谓的`异步`


setState 的批量更新优化也是建立在`异步`（合成事件、钩子函数）之上的，在`原生事件`和 `setTimeout` 中不会批量更新，在`异步`中如果对同一个值进行多次 setState，setState 的批量更新策略会对其进行覆盖，取最后一次的执行，如果是同时 setState 多个不同的值，在更新时会对其进行合并批量更新

# React JSX
JSX 是一个 JavaScript 的`语法扩展`，或者说叫`语法糖`。在 React 中配合使用 JSX，JSX 可以很好地描述 UI 应该呈现出它应有交互的本质形式。JSX 可能会使人联想到模版语言，但它具有 JavaScript 的全部功能，从本质上说，JSX 最终会被编译为 React.createElement() 函数调用，返回称为 “React 元素” 的普通 JavaScript 对象


# React组件通信如何实现?
React组件间通信方式:

1. 父组件向子组件通讯: 父组件可以向子组件通过传 props 的方式，向子组件进行通讯
2. 子组件向父组件通讯: props+回调的方式,父组件向子组件传递 props 进行通讯，此props为作用域为父组件自身的函数，子组件调用该函数，将子组件想要传递的信息，作为参数，传递到父组件的作用域中
3. 兄弟组件通信: 找到这两个兄弟节点共同的父节点,结合上面两种方式由父节点转发信息进行通信
4. 全局状态管理工具: 借助Redux或者Mobx等全局状态管理工具进行通信,这种工具会维护一个全局状态中心Store,并根据不同的事件产生新的状态


# Redux 的核心概念和工作流程
redux的工作流程?
首先，我们看下几个核心概念：

1. Store：保存数据的地方，你可以把它看成一个容器，整个应用只能有一个Store。
2. State：Store对象包含所有数据，如果想得到某个时点的数据，就要对Store生成快照，这种时点的数据集合，就叫做State。
3. Action：State的变化，会导致View的变化。但是，用户接触不到State，只能接触到View。所以，State的变化必须是View导致的。Action就是View发出的通知，表示State应该要发生变化了。
4. Action Creator：View要发送多少种消息，就会有多少种Action。如果都手写，会很麻烦，所以我们定义一个函数来生成Action，这个函数就叫Action Creator。
5. Reducer：Store收到Action以后，必须给出一个新的State，这样View才会发生变化。这种State的计算过程就叫做Reducer。Reducer是一个函数，它接受Action和当前State作为参数，返回一个新的State。
6. dispatch：是View发出Action的唯一方法。

然后我们过下整个工作流程：

首先，用户（通过View）发出Action，发出方式就用到了dispatch方法。
然后，Store自动调用Reducer，并且传入两个参数：当前State和收到的Action，Reducer会返回新的State
State一旦有变化，Store就会调用监听函数，来更新View。

到这儿为止，一次用户交互流程结束。可以看到，在整个流程中数据都是单向流动的，这种方式保证了流程的清晰。

# Hook 是什么？
## 一句话解释 Hook
Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性


Hook 是一些可以让你在函数组件里“钩入” React state 及生命周期等特性的函数。Hook 不能在 class 组件中使用 —— 这使得你不使用 class 也能使用 React


## Hook 是针对在使用react时存在以下问题而产生的：

1. 组件之间复用状态逻辑很难，在hooks之前，实现组件复用，一般采用高阶组件和 Render Props，它们本质是将复用逻辑提升到父组件中，很容易产生很多包装组件，带来嵌套地狱。
2. 组件逻辑变得越来越复杂，尤其是生命周期函数中常常包含一些不相关的逻辑，完全不相关的代码却在同一个方法中组合在一起。如此很容易产生 bug，并且导致逻辑不一致。
3. 复杂的class组件，使用class组件，需要理解 JavaScript 中 this 的工作方式，不能忘记绑定事件处理器等操作，代码复杂且冗余。除此之外，class组件也会让一些react优化措施失效。


针对上面提到的问题，react团队研发了hooks，它主要有两方面作用：


**用于在函数组件中引入状态管理和生命周期方法**


**取代高阶组件和render props来实现抽象和可重用性**

React 内置了一些像 useState 这样的 Hook。我们也可以创建自己的 Hook 来复用不同组件之间的状态逻辑


其中比较常见的 Hook 以 useState 为例：通过在函数组件里调用它来给组件添加一些内部 state。React 会在重复渲染时保留这个 state。useState 会返回一对值：当前状态和一个让你更新它的函数，我们可以调用这个函数。它类似 class 组件的 this.setState，但是它不会把新的 state 和旧的 state 进行合并。（我们会在使用 State Hook 里展示一个对比 useState 和 this.state 的例子）。

useState 唯一的参数就是初始 state

## demo:

```JavaScript
export default function ClickNumber() {
    const [count, setCount] = useState(0);
    
/**
    在 Example 组件内部，
    我们通过调用 useState Hook 声明了一个新的 state 变量
    它返回一对值给到我们命名的变量上
    我们把变量命名为 count，因为它存储的是点击次数
    我们通过传 0 作为 useState 唯一的参数来将其初始化为 0
    第二个返回的值本身就是一个函数
    它让我们可以更新 count 的值，所以我们叫它 setCount
 */   
    useEffect(() => {
        // 使用浏览器的 API 更新页面标题
        document.title = `You clicked ${count} times`;
      });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me to MINUS
            </button>
            <br></br>
            <button onClick={() => setCount(count - 1)}>
        {/* 当用户点击按钮后，我们传递一个新的值给 setCount
        React 会重新渲染 Example 组件，并把最新的 count 传给它 */}
            Click me to ADD
            </button>
            <br/>
            <button onClick={() => setCount(0)}>
                Click me to RESET
            </button>
        </div>
    )
}
```



# React 安全性考虑

主要由 Facebook 开发和维护， MIT 许可

# React 生命周期

生命周期方法，用于在组件不同阶段执行自定义功能。在组件被创建并插入到 DOM 时（即挂载中阶段（mounting）），组件更新时，组件取消挂载或从 DOM 中删除时，都有可以使用的生命周期方法。

每个组件都包含“生命周期方法”，我们可以重写这些方法，以便于在运行过程中特定的阶段执行这些方法

1. Mounting：已插入真实 DOM
2. Updating：正在被重新渲染
3. Unmounting：已移出真实 DOM


生命周期图：https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/


生命周期的方法有：

# 挂载 Mounting
当组件实例被创建并插入 DOM 中时，其生命周期调用顺序如下：

constructor()
static getDerivedStateFromProps()
render()
componentDidMount()
注意:

下述生命周期方法即将过时，在新代码中应该避免使用它们：

UNSAFE_componentWillMount()
# 更新 Updating
当组件的 props 或 state 发生变化时会触发更新。组件更新的生命周期调用顺序如下：

static getDerivedStateFromProps()
shouldComponentUpdate()
render()
getSnapshotBeforeUpdate()
componentDidUpdate()
注意:

下述方法即将过时，在新代码中应该避免使用它们：

UNSAFE_componentWillUpdate()
UNSAFE_componentWillReceiveProps()

# 卸载 Unmounting

当组件从 DOM 中移除时会调用如下方法：

componentWillUnmount()
# 错误处理
当渲染过程，生命周期，或子组件的构造函数中抛出错误时，会调用如下方法：

static getDerivedStateFromError()
componentDidCatch()

# 生命周期常见的函数
## render()
```JavaScript
render()
```
render() 方法是 class 组件中唯一必须实现的方法。

当 render 被调用时，它会检查 this.props 和 this.state 的变化并返回以下类型之一：

1. React 元素。通常通过 JSX 创建。例如，`<div />` 会被 React 渲染为 DOM 节点，`<MyComponent />` 会被 React 渲染为自定义组件，无论是 `<div />` 还是 `<MyComponent />` 均为 React 元素。
2. 数组或 fragments。 使得 render 方法可以返回多个元素。欲了解更多详细信息，请参阅 fragments 文档。
Portals。可以渲染子节点到不同的 DOM 子树中。欲了解更多详细信息，请参阅有关 portals 的文档
3. 字符串或数值类型。它们在 DOM 中会被渲染为文本节点
4. 布尔类型或 null。什么都不渲染。（主要用于支持返回 test && `<Child />` 的模式，其中 test 为布尔类型。)

render() 函数应该为纯函数，这意味着在不修改组件 state 的情况下，每次调用时都返回相同的结果，并且它不会直接与浏览器交互。

如需与浏览器进行交互，请在 componentDidMount() 或其他生命周期方法中执行你的操作。保持 render() 为纯函数，可以使组件更容易思考。

注意

如果 shouldComponentUpdate() 返回 false，则不会调用 render()。

## constructor()
```JavaScript
constructor(props)
```
如果不初始化 state 或不进行方法绑定，则不需要为 React 组件实现构造函数。

在 React 组件挂载之前，会调用它的构造函数。在为 React.Component 子类实现构造函数时，应在其他语句之前前调用 super(props)。否则，this.props 在构造函数中可能会出现未定义的 bug。

通常，在 React 中，构造函数仅用于以下两种情况：

通过给 this.state 赋值对象来初始化内部 state。
为事件处理函数绑定实例
在 constructor() 函数中不要调用 setState() 方法。如果你的组件需要使用内部 state，请直接在构造函数中为 this.state 赋值初始 state：
```JavaScript
constructor(props) {
  super(props);
  // 不要在这里调用 this.setState()
  this.state = { counter: 0 };
  this.handleClick = this.handleClick.bind(this);
}
```
只能在构造函数中直接为 this.state 赋值。如需在其他方法中赋值，你应使用 this.setState() 替代。

要避免在构造函数中引入任何副作用或订阅。如遇到此场景，请将对应的操作放置在 componentDidMount 中。

注意

避免将 props 的值复制给 state！这是一个常见的错误：
```JavaScript
constructor(props) {
 super(props);
 // 不要这样做
 this.state = { color: props.color };
}
```
如此做毫无必要（你可以直接使用 this.props.color），同时还产生了 bug（更新 prop 中的 color 时，并不会影响 state）。

只有在你刻意忽略 prop 更新的情况下使用。此时，应将 prop 重命名为 initialColor 或 defaultColor。必要时，你可以修改它的 key，以强制“重置”其内部 state。

请参阅关于避免派生状态的博文，以了解出现 state 依赖 props 的情况该如何处理。

## componentDidMount()
```JavaScript
componentDidMount()
```
componentDidMount() 会在组件挂载后（插入 DOM 树中）立即调用。依赖于 DOM 节点的初始化应该放在这里。如需通过网络请求获取数据，此处是实例化请求的好地方。

这个方法是比较适合添加订阅的地方。如果添加了订阅，请不要忘记在 componentWillUnmount() 里取消订阅

你可以在 componentDidMount() 里直接调用 setState()。它将触发额外渲染，但此渲染会发生在浏览器更新屏幕之前。如此保证了即使在 render() 两次调用的情况下，用户也不会看到中间状态。请谨慎使用该模式，因为它会导致性能问题。通常，你应该在 constructor() 中初始化 state。如果你的渲染依赖于 DOM 节点的大小或位置，比如实现 modals 和 tooltips 等情况下，你可以使用此方式处理

## componentDidUpdate()
componentDidUpdate(prevProps, prevState, snapshot)
componentDidUpdate() 会在更新后会被立即调用。首次渲染不会执行此方法。

当组件更新后，可以在此处对 DOM 进行操作。如果你对更新前后的 props 进行了比较，也可以选择在此处进行网络请求。（例如，当 props 未发生变化时，则不会执行网络请求）。
```JavaScript
componentDidUpdate(prevProps) {
  // 典型用法（不要忘记比较 props）：
  if (this.props.userID !== prevProps.userID) {
    this.fetchData(this.props.userID);
  }
}
```
你也可以在 componentDidUpdate() 中直接调用 setState()，但请注意它必须被包裹在一个条件语句里，正如上述的例子那样进行处理，否则会导致死循环。它还会导致额外的重新渲染，虽然用户不可见，但会影响组件性能。不要将 props “镜像”给 state，请考虑直接使用 props。 欲了解更多有关内容，请参阅为什么 props 复制给 state 会产生 bug。

如果组件实现了 getSnapshotBeforeUpdate() 生命周期（不常用），则它的返回值将作为 componentDidUpdate() 的第三个参数 “snapshot” 参数传递。否则此参数将为 undefined。

注意

如果 shouldComponentUpdate() 返回值为 false，则不会调用 componentDidUpdate()。

## componentWillUnmount()
```JavaScript
componentWillUnmount()
```
componentWillUnmount() 会在组件卸载及销毁之前直接调用。在此方法中执行必要的清理操作，例如，清除 timer，取消网络请求或清除在 componentDidMount() 中创建的订阅等。

componentWillUnmount() 中不应调用 setState()，因为该组件将永远不会重新渲染。组件实例卸载后，将永远不会再挂载它。

# Babel
1. Parse(解析)：将源代码转换成更加抽象的表示方法（例如抽象语法树）
2. Transform(转换)：对（抽象语法树）做一些特殊处理，让它符合编译器的期望
3. Generate(代码生成)：将第二步经过转换过的（抽象语法树）生成新的代码

1. babel 将 React 代码解析为抽象语法树
2. 开发者利用 babel 插件定义转换规则，根据原本的抽象语法树生成一个符合小程序规则的新抽象语法树
3. babel 则根据新的抽象语法树生成代码，此时的代码就是符合小程序规则的新代码