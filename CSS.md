# CSS 概述
-CSS 指层叠样式表 英文全称：Cascading Style Sheets


-样式定义如何显示 HTML 元素


-样式通常存储在样式表中


-把样式添加到 HTML 4.0 中，是为了解决内容与表现分离的问题


-外部样式表可以极大提高工作效率


-外部样式表通常存储在 CSS 文件中


-多个样式定义可层叠为一个

# 样式解决了一个普遍的问题
HTML 标签原本被设计为用于定义文档内容。通过使用 `<h1>、<p>、<table>` 这样的标签，HTML 的初衷是表达“这是标题”、“这是段落”、“这是表格”之类的信息。同时文档布局由浏览器来完成，而不使用任何的格式化标签。


由于两种主要的浏览器（Netscape 和 Internet Explorer）不断地将新的 HTML 标签和属性（比如字体标签和颜色属性）添加到 HTML 规范中，创建文档内容清晰地独立于文档表现层的站点变得越来越困难


为了解决这个问题，万维网联盟（W3C），这个非营利的标准化联盟，肩负起了 HTML 标准化的使命，并在 HTML 4.0 之外创造出样式（Style）


所有的主流浏览器均支持层叠样式表

# 样式表极大地提高了工作效率
样式表定义如何显示 HTML 元素，就像 HTML 3.2 的字体标签和颜色属性所起的作用那样。样式通常保存在外部的 .css 文件中。通过仅仅编辑一个简单的 CSS 文档，外部样式表使你有能力同时改变站点中所有页面的布局和外观


由于允许同时控制多重页面的样式和布局，CSS 可以称得上 WEB 设计领域的一个突破。作为网站开发者，你能够为每个 HTML 元素定义样式，并将之应用于你希望的任意多的页面中。如需进行全局的更新，只需简单地改变样式，然后网站中的所有元素均会自动地更新

# 多重样式将层叠为一个

样式表允许以多种方式规定样式信息。样式可以规定在单个的 HTML 元素中，在 HTML 页的头元素中，或在一个外部的 CSS 文件中。甚至可以在同一个 HTML 文档内部引用多个外部样式表。


层叠次序
当同一个 HTML 元素被不止一个样式定义时，会使用哪个样式呢？一般而言，所有的样式会根据下面的规则层叠于一个新的虚拟样式表中，其中数字 4 拥有最高的优先权。

1. 浏览器缺省设置
2. 外部样式表
3. 内部样式表（位于 `<head>`标签内部）
4. 内联样式（在 HTML 元素内部）


因此，内联样式（在 HTML 元素内部）拥有最高的优先权，这意味着它将优先于以下的样式声明：`<head>` 标签中的样式声明，外部样式表中的样式声明，或者浏览器中的样式声明（缺省值）。

# CSS 语法

CSS 规则由两个主要的部分构成：1. 选择器 2.声明

`selector {declaration1; declaration2; ... declarationN }`
选择器用来选择需要改变样式的 HTML 元素

每条声明由一个属性和一个值组成

属性（property）是我们希望设置的样式属性（style attribute）。每个属性有一个值。属性和值被冒号分开

selector {property: value}
下面这行代码的作用是将 h1 元素内的文字颜色定义为红色，同时将字体大小设置为 14 像素。

在这个例子中，h1 是选择器，color 和 font-size 是属性，red 和 14px 是值。

`h1 {color:red; font-size:14px;}`

# BFC
块格式化上下文（Block Formatting Context，BFC） 是Web页面的可视CSS渲染的一部分，是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。

下列方式会创建块格式化上下文：

根元素（`<html>`）


浮动元素（元素的 float 不是 none）


绝对定位元素（元素的 position 为 absolute 或 fixed）


行内块元素（元素的 display 为 inline-block）


表格单元格（元素的 display 为 table-cell，HTML 表格单元格默认为该值）


表格标题（元素的 display 为 table-caption，HTML 表格标题默认为该值）


匿名表格单元格元素（元素的 display 为 table、table-row、 table-row-group、table-header-group、table-footer-group（分别是HTML table、row、tbody、thead、tfoot 的默认属性）或 inline-table）


overflow 值不为 visible 的块元素


**display 值为 flow-root 的元素**


contain 值为 layout、content 或 paint 的元素


弹性元素（display 为 flex 或 inline-flex 元素的直接子元素）


网格元素（display 为 grid 或 inline-grid 元素的直接子元素）


多列容器（元素的 column-count 或 column-width 不为 auto，包括 column-count 为 1）


column-span 为 all 的元素始终会创建一个新的BFC，即使该元素没有包裹在一个多列容器中（标准变更，Chrome bug）

**块格式化上下文包含创建它的元素内部的所有内容.**

块格式化上下文对`浮动定位`与`清除浮动`都很重要。浮动定位和清除浮动时只会应用于同一个BFC内的元素。浮动不会影响其它BFC中元素的布局，而清除浮动只能清除同一BFC中在它前面的元素的浮动。外边距折叠（Margin collapsing）也只会发生在属于同一BFC的块级元素之间。

BFC 主要的作用是：

清除浮动
防止同一 BFC 容器中的相邻元素间的外边距重叠问题

## 一句话概括 BFC:
`BFC 是页面上的一个隔离的独立容器`

容器里面的子元素不会影响到外面元素。比如：内部滚动就是一个 BFC，当一个父容器的 overflow-y 设置为 auto 时，并且子容器的长度大于父容器时，就会出现内部滚动，无论内部的元素怎么滚动，都不会影响父容器以外的布局，这个父容器的渲染区域就叫 BFC。满足下列条件之一就可触发 BFC：

根元素，即 HTML 元素
float 的值不为 none
overflow 的值不为 visible
display 的值为 inline-block、table-cell、table-caption
position 的值为 absolute 或 fixed

# 选择器及其优先级

浏览器通过优先级来判断哪些属性值与一个元素最为相关，从而在该元素上应用这些属性值。优先级是基于不同种类选择器组成的匹配规则。

## 优先级是如何计算的？

下面列表中，选择器类型的优先级是递增的：

## 内联 > ID选择器 > 类选择器 > 标签选择器

1. 内联
2. ID 选择器（例如，#example）
3. 类选择器 (例如，.example)，属性选择器（例如，[type="radio"]）和伪类（例如，:hover）
4. 标签选择器（例如，h1）和伪元素（例如，::before）


准确地说：


优先级是由 A、B、C、D 的值来决定的，其中它们的值计算规则如下：

如果存在内联样式，那么 A = 1, 否则 A = 0;
B 的值等于 `ID选择器` 出现的次数;
C 的值等于 `类选择器` 和 `属性选择器` 和 `伪类` 出现的总次数;
D 的值等于 `标签选择器` 和 `伪元素` 出现的总次数 。

比较规则是: 从左往右依次进行比较 ，较大者胜出，如果相等，则继续往右移动一位进行比较 。如果4位全部相等，则后面的会覆盖前面的

可以将之视为一个一维数组来比较 :  `[A,B,C,D]`

# 关于 CSS 中定位的几种方式
## 语法
position 属性

## 取值
### static
该关键字指定元素使用正常的布局行为，即元素在文档常规流中当前的布局位置。此时 top, right, bottom, left 和 z-index 属性无效。
### relative
该关键字下，元素先放置在未添加定位时的位置，再在不改变页面布局的前提下调整元素位置（因此会在此元素未添加定位时所在位置留下空白）。position:relative 对 table-*-group, table-row, table-column, table-cell, table-caption 元素无效。
### absolute
元素会被移出正常文档流，并不为元素预留空间，通过指定元素相对于最近的非 static 定位祖先元素的偏移，来确定元素位置。绝对定位的元素可以设置外边距（margins），且不会与其他边距合并。
### fixed
元素会被移出正常文档流，并不为元素预留空间，而是通过指定元素相对于屏幕视口（viewport）的位置来指定元素位置。元素的位置在屏幕滚动时不会改变。打印时，元素会出现在的每页的固定位置。fixed 属性会创建新的层叠上下文。当元素祖先的 transform, perspective 或 filter 属性非 none 时，容器由视口改为该祖先。

# CSS 盒模型

当对一个文档进行布局（lay out）的时候，浏览器的渲染引擎会根据 CSS 基础框盒模型（CSS basic box model），将所有元素表示为一个个矩形的盒子（box）。CSS 决定这些盒子的大小、位置以及属性（例如颜色、背景、边框尺寸）


每个盒子由`四个部分`组成。如图，与盒子的四个组成区域相对应，每个盒子有四个边界：内容边界 Content edge、内边距边界 Padding Edge、边框边界 Border Edge、外边框边界 Margin Edge。



## 内容区域 `content area`

由内容边界限制，容纳着元素的“真实”内容，例如文本、图像，或是一个视频播放器。它的尺寸为内容宽度（或称 content-box 宽度）和内容高度（或称 content-box 高度）。它通常含有一个背景颜色（默认颜色为透明）或背景图像。

## 内边距区域 `padding area` 

由内边距边界限制，扩展自内容区域，负责延伸内容区域的背景，填充元素中内容与边框的间距。它的尺寸是 padding-box 宽度 和 padding-box 高度。

内边距的粗细可以由 padding-top、padding-right、padding-bottom、padding-left，和简写属性 padding 控制。

## 边框区域 `border area `

由边框边界限制，扩展自内边距区域，是容纳边框的区域。其尺寸为 border-box  宽度 和 border-box 高度。


边框的粗细由 border-width 和简写的 border 属性控制。如果 box-sizing 属性被设为 border-box，那么边框区域的大小可明确地通过 width、min-width, max-width、height、min-height，和 max-height 属性控制。假如框盒上设有背景（background-color 或 background-image），背景将会一直延伸至边框的外沿（默认为在边框下层延伸，边框会盖在背景上）。此默认表现可通过 CSS 属性 background-clip 来改变。

## 外边距区域 `margin area` 

由外边距边界限制，用空白区域扩展边框区域，以分开相邻的元素。它的尺寸为 margin-box 宽度 和 margin-box 高度。


外边距区域的大小由 margin-top、margin-right、margin-bottom、margin-left，和简写属性 margin 控制。在发生外边距合并的情况下，由于盒之间共享外边距，外边距不容易弄清楚。

# IE盒模型和W3C标准盒模型的区别是什么？
## 1.W3C 标准盒模型：
属性`width`,`height`只包含内容`content`，不包含`border`和`padding`

## 2.IE 模型：
属性`width,height 包含 border和padding`，指的是`content + padding + border`。

# 渐进增强和优雅降级
## 渐进增强（Progressive Enhancement）：
一开始就针对低版本浏览器进行构建页面，完成基本的功能，然后再针对高级浏览器进行效果、交互、追加功能达到更好的体验。
## 优雅降级（Graceful Degradation）：
一开始就构建站点的完整功能，然后针对浏览器测试和修复。比如一开始使用 CSS3 的特性构建了一个应用，然后逐步针对各大浏览器进行 hack 使其可以在低版本浏览器上正常浏览

