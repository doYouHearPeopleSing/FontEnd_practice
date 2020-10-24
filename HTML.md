HTML
======
# 什么是 HTML ？
HTML 是用来描述网页的一种语言。

1. HTML 指的是超文本标记语言 (Hyper Text Markup Language)
2. HTML 不是一种编程语言，而是一种标记语言 (markup language)
3. 标记语言是一套标记标签 (markup tag)
4. HTML 使用标记标签来描述网页  

# HTML 标签的相关属性有哪些？

1. HTML 标记标签通常被称为 HTML 标签 (HTML tag)。

2. HTML 标签是由尖括号包围的关键词，比如 `<html>`
3. HTML 标签通常是成对出现的，比如 `<b>` 和 `</b>`
4. 标签对中的第一个标签是开始标签，第二个标签是结束标签，开始和结束标签也被称为开放标签和闭合标签

# HTML 几种常见的基础标签

## HTML 标题
HTML 标题（Heading）是通过 `<h1> - <h6>` 等标签进行定义的。

实例
```
<h1>This is a heading</h1>
<h2>This is a heading</h2>
<h3>This is a heading</h3>
```

## HTML 段落
HTML 段落是通过 `<p>` 标签进行定义的。

实例
```
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
```

## HTML 链接
HTML 链接是通过 `<a>` 标签进行定义的。

实例
```
<a href="http://www.w3school.com.cn">This is a link</a>
```

注释：在 href 属性中指定链接的地址。


## HTML 图像
HTML 图像是通过 `<img>` 标签进行定义的。

实例
```
<img src="w3school.jpg" width="104" height="142" />
```

注释：图像的名称和尺寸是以属性的形式提供的。
# HTML src 和 herf 的区别
`href` 是`Hypertext Reference`的简写，表示超文本引用，指向网络资源所在位置
`src`是`source`的简写，目的是要把文件下载到html页面中去。
# HTML`<div>` 和 `<span>`

可以通过 `<div>` 和 `<span>` 将 HTML 元素组合起来。

HTML 块元素
大多数 HTML 元素被定义为块级元素或内联元素。

编者注：“块级元素”译为 block level element，“内联元素”译为 inline element。

块级元素在浏览器显示时，通常会以新行来开始（和结束）。

例子：`<h1>, <p>, <ul>, <table>`

HTML 内联元素
内联元素在显示时通常不会以新行开始。

例子：`<b>, <td>, <a>, <img>`

HTML `<div>` 元素
HTML `<div>` 元素是块级元素，它是可用于组合其他 HTML 元素的容器。

`<div>`元素没有特定的含义。除此之外，由于它属于块级元素，浏览器会在其前后显示折行。

如果与 CSS 一同使用，`<div>` 元素可用于对大的内容块设置样式属性。

`<div>` 元素的另一个常见的用途是文档布局。它取代了使用表格定义布局的老式方法。使用 `<table>` 元素进行文档布局不是表格的正确用法。`<table>` 元素的作用是显示表格化的数据。

HTML `<span>` 元素
HTML `<span>` 元素是内联元素，可用作文本的容器。

`<span>` 元素也没有特定的含义。

当与 CSS 一同使用时，`<span>` 元素可用于为部分文本设置样式属性。

# HTML 文本格式化

|标签	|描述|
|---|---|
|`<b>`	|定义粗体文本|
|`<big>`	|定义大号字|
|`<em>`	|定义着重文字|
|`<i>`	|定义斜体字|
|`<small>`|	定义小号字|
|`<strong>`|	定义加重语气|
|`<sub>`	|定义下标字|
|`<sup>`	|定义上标字|
|`<ins>`	|定义插入字|
|`<del>`	|定义删除字|

### HTML5 - 新特性

新的语义元素，比如 `<header>`, `<footer>`, `<article>`, and `<section>`。

新的表单控件，比如数字、日期、时间、日历和滑块。

强大的图像支持（借由 `<canvas>` 和 `<svg>`）

强大的多媒体支持（借由 `<video>` 和 `<audio>`）

强大的新 API，比如用本地存储取代 cookie

# HTML5 Canvas

canvas 元素用于在网页上绘制图形。

# 什么是 Canvas？
HTML5 的 canvas 元素使用 JavaScript 在网页上绘制图像

画布是一个矩形区域，您可以控制其每一像素

canvas 拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法

# 什么是 XHTML
前端部分知识大总结
======
### 什么是 HTML ？
HTML 是用来描述网页的一种语言。

1. HTML 指的是超文本标记语言 (Hyper Text Markup Language)
2. HTML 不是一种编程语言，而是一种标记语言 (markup language)
3. 标记语言是一套标记标签 (markup tag)
4. HTML 使用标记标签来描述网页

### HTML 标签的相关属性有哪些？

1. HTML 标记标签通常被称为 HTML 标签 (HTML tag)。

2. HTML 标签是由尖括号包围的关键词，比如 `<html>`
3. HTML 标签通常是成对出现的，比如 `<b>` 和 `</b>`
4. 标签对中的第一个标签是开始标签，第二个标签是结束标签，开始和结束标签也被称为开放标签和闭合标签

### HTML 几种常见的基础标签

#### HTML 标题
HTML 标题（Heading）是通过 `<h1> - <h6>` 等标签进行定义的。

实例
```
<h1>This is a heading</h1>
<h2>This is a heading</h2>
<h3>This is a heading</h3>
```

#### HTML 段落
HTML 段落是通过 `<p>` 标签进行定义的。

实例
```
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
```

#### HTML 链接
HTML 链接是通过 `<a>` 标签进行定义的。

实例
```
<a href="http://www.w3school.com.cn">This is a link</a>
```

注释：在 href 属性中指定链接的地址。


#### HTML 图像
HTML 图像是通过 `<img>` 标签进行定义的。

实例
```
<img src="w3school.jpg" width="104" height="142" />
```

注释：图像的名称和尺寸是以属性的形式提供的。
### HTML src 和 herf 的区别
`href` 是`Hypertext Reference`的简写，表示超文本引用，指向网络资源所在位置
`src`是`source`的简写，目的是要把文件下载到html页面中去。
### HTML`<div>` 和 `<span>`

可以通过 `<div>` 和 `<span>` 将 HTML 元素组合起来。

HTML 块元素
大多数 HTML 元素被定义为块级元素或内联元素。

编者注：“块级元素”译为 block level element，“内联元素”译为 inline element。

块级元素在浏览器显示时，通常会以新行来开始（和结束）。

例子：`<h1>, <p>, <ul>, <table>`

HTML 内联元素
内联元素在显示时通常不会以新行开始。

例子：`<b>, <td>, <a>, <img>`

HTML `<div>` 元素
HTML `<div>` 元素是块级元素，它是可用于组合其他 HTML 元素的容器。

`<div>`元素没有特定的含义。除此之外，由于它属于块级元素，浏览器会在其前后显示折行。

如果与 CSS 一同使用，`<div>` 元素可用于对大的内容块设置样式属性。

`<div>` 元素的另一个常见的用途是文档布局。它取代了使用表格定义布局的老式方法。使用 `<table>` 元素进行文档布局不是表格的正确用法。`<table>` 元素的作用是显示表格化的数据。

HTML `<span>` 元素
HTML `<span>` 元素是内联元素，可用作文本的容器。

`<span>` 元素也没有特定的含义。

当与 CSS 一同使用时，`<span>` 元素可用于为部分文本设置样式属性。

### HTML 文本格式化

|标签	|描述|
|---|---|
|`<b>`	|定义粗体文本|
|`<big>`	|定义大号字|
|`<em>`	|定义着重文字|
|`<i>`	|定义斜体字|
|`<small>`|	定义小号字|
|`<strong>`|	定义加重语气|
|`<sub>`	|定义下标字|
|`<sup>`	|定义上标字|
|`<ins>`	|定义插入字|
|`<del>`	|定义删除字|

## 什么是 HTML5？
HTML5 是最新的 HTML 标准。

HTML5 是专门为承载丰富的 web 内容而设计的，并且无需额外插件。

HTML5 拥有新的语义、图形以及多媒体元素。

HTML5 提供的新元素和新的 API 简化了 web 应用程序的搭建。

HTML5 是跨平台的，被设计为在不同类型的硬件（PC、平板、手机、电视机等等）之上运行。

### HTML5 - 新特性

新的语义元素，比如 `<header>`, `<footer>`, `<article>`, and `<section>`。

新的表单控件，比如数字、日期、时间、日历和滑块。

强大的图像支持（借由 `<canvas>` 和 `<svg>`）

强大的多媒体支持（借由 `<video>` 和 `<audio>`）

强大的新 API，比如用本地存储取代 cookie

### HTML5 Canvas

canvas 元素用于在网页上绘制图形。

#### 什么是 Canvas？
可扩展超文本标记语言（英语：eXtensible HyperText Markup Language，XHTML）
是一种标记语言，表现方式与超文本标记语言（HTML）类似，不过语法上更加严格

严格的语法具体表现在：
1. XHTML 元素必须被正确地嵌套。
2. XHTML 元素必须被关闭。
3. 标签名必须用小写字母。
4. XHTML 文档必须拥有根元素。