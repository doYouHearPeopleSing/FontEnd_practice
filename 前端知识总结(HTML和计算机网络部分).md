前端部分知识大总结
======

# w3cschool 基础部分

## 第一个部分：HTML

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
HTML5 的 canvas 元素使用 JavaScript 在网页上绘制图像。

画布是一个矩形区域，您可以控制其每一像素。

canvas 拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法。

# 网络

URL - Uniform Resource Locator

URL指的是统一资源定位符（Uniform Resource Locator）。URL无非就是一个给定的独特资源在Web上的地址。理论上说，每个有效的URL都指向一个独特的资源。这个资源可以是一个HTML页面，一个CSS文档，一幅图像，等等。而在实际中，有一些例外，最常见的情况就是URL指向了不存在的或是被移动过的资源。由于通过URL呈现的资源和URL本身由Web服务器处理，因此web服务器的拥有者需要认真地维护资源以及与它关联的URL。

当您点击 HTML 页面中的某个链接时，对应的 `<a>`标签指向万维网上的一个地址。

统一资源定位器（URL）用于定位万维网上的文档（或其他数据）。

网址，比如 http://www.w3school.com.cn/html/index.asp，遵守以下的语法规则：

scheme://host.domain:port/path/filename

解释：

scheme - 定义因特网服务的类型。最常见的类型是 http


host - 定义域主机（http 的默认主机是 www）


domain - 定义因特网域名，比如 w3school.com.cn


:port - 定义主机上的端口号（http 的默认端口号是 80）


path - 定义服务器上的路径（如果省略，则文档必须位于网站的根目录中）


filename - 定义文档/资源的名称


URL 的英文全称是 Uniform Resource Locator，中文也译为“统一资源定位符”。

URL Schemes
以下是其中一些最流行的 scheme：

|Scheme	|访问	|用于...|
|---|---|---|
|http	|超文本传输协议|	以 http:// 开头的普通网页。不加密。|
|https|	安全超文本传输协议|	安全网页。加密所有信息交换。|
|ftp	|文件传输协议|	用于将文件下载或上传至网站。|
|file|	 	|您计算机上的文件。|

### HTTP

#### HTTP 方法：GET 对比 POST

两种最常用的 HTTP 方法是：GET 和 POST。

#### 什么是 HTTP？
超文本传输协议（HTTP）的设计目的是保证客户机与服务器之间的通信。

HTTP 的工作方式是客户机与服务器之间的请求-应答协议。

web 浏览器可能是客户端，而计算机上的网络应用程序也可能作为服务器端。

举例：客户端（浏览器）向服务器提交 HTTP 请求；服务器向客户端返回响应。响应包含关于请求的状态信息以及可能被请求的内容。

#### 两种 HTTP 请求方法：GET 和 POST
在客户机和服务器之间进行请求-响应时，两种最常被用到的方法是：GET 和 POST。

*GET* - 从指定的资源请求数据。
*POST* - 向指定的资源提交要被处理的数据
#### GET 方法
请注意，查询字符串（名称/值对）是在 GET 请求的 URL 中发送的：

```/test/demo_form.asp?name1=value1&name2=value2```
有关 GET 请求的其他一些注释：

-GET 请求可被缓存
-GET 请求保留在浏览器历史记录中
-GET 请求可被收藏为书签
-GET 请求不应在处理敏感数据时使用
-GET 请求有长度限制
-GET 请求只应当用于取回数据
#### POST 方法
请注意，查询字符串（名称/值对）是在 POST 请求的 HTTP 消息主体中发送的：

POST /test/demo_form.asp HTTP/1.1
Host: w3schools.com
name1=value1&name2=value2
有关 POST 请求的其他一些注释：

POST 请求不会被缓存
POST 请求不会保留在浏览器历史记录中
POST 不能被收藏为书签
POST 请求对数据长度没有要求
#### 比较 GET 与 POST
下面的表格比较了两种 HTTP 方法：GET 和 POST。

|比较项目|GET|	POST|
|---|---|---|
|后退按钮和刷新|	无害|	数据会被重新提交（浏览器应该告知用户数据会被重新提交）。|
|书签	|可收藏为书签	|不可收藏为书签|
|缓存	|能被缓存	|不能缓存|
|编码类型|	application/x-www-form-urlencoded	|application/x-www-form-urlencoded 或 multipart/form-data。为二进制数据使用多重编码。|
|历史	|参数保留在浏览器历史中。	|参数不会保存在浏览器历史中。|
|对数据长度的限制	|是的。当发送数据时，GET 方法向 URL 添加数据；URL 的长度是受限制的（URL 的最大长度是 2048 个字符）。	|无限制。|
|对数据类型的限制	|只允许 ASCII 字符。	|没有限制。也允许二进制数据。|
|安全性|与 POST 相比，GET 的安全性较差，因为所发送的数据是 URL 的一部分。在发送密码或其他敏感信息时绝不要使用 GET ！|



POST 比 GET 更安全，因为参数不会被保存在浏览器历史或 web 服务器日志中。
可见性	数据在 URL 中对所有人都是可见的。	数据不会显示在 URL 中。
其他 HTTP 请求方法
下面的表格列出了其他一些 HTTP 请求方法：

|方法	|描述|
|---|---|
|HEAD|	与 GET 相同，但只返回 HTTP 报头，不返回文档主体。|
|PUT|	上传指定的 URI 表示。|
|DELETE|	删除指定资源。|
|OPTIONS|	返回服务器支持的 HTTP 方法。|
|CONNECT|	把请求连接转换到透明的 TCP/IP 通道。|

# WebScoket 基础知识

众所周知，Web应用的通信过程通常是`客户端`通过`浏览器`发出一个`请求`，`服务器端`接收`请求`后进行处理并返回结果给客户端，客户端浏览器将信息呈现。这种机制对于信息变化不是特别频繁的应用可以良好支撑，但对于实时要求高、海量并发的应用来说显得捉襟见肘，尤其在当前业界移动互联网蓬勃发展的趋势下，高并发与用户实时响应是Web应用经常面临的问题，比如金融证券的实时信息、Web导航应用中的地理位置获取、社交网络的实时消息推送等。传统的请求-响应模式的Web开发在处理此类业务场景时，通常采用实时通讯方案。比如常见的轮询方案，其原理简单易懂，就是客户端以一定的时间间隔频繁请求的方式向服务器发送请求，来保持客户端和服务器端的数据同步。其问题也很明显：当客户端以固定频率向服务器端发送请求时，服务器端的数据可能并没有更新，带来很多无谓请求，浪费带宽，效率低下。


基于Flash，AdobeFlash通过自己的Socket实现完成数据交换，再利用Flash暴露出相应的接口给JavaScript调用，从而达到实时传输目的。此方式比轮询要高效，且因为Flash安装率高，应用场景广泛。然而，移动互联网终端上Flash的支持并不好：IOS系统中无法支持Flash，Android虽然支持Flash但实际的使用效果差强人意，且对移动设备的硬件配置要求较高。2012年Adobe官方宣布不再支持Android4.1+系统，宣告了Flash在移动终端上的死亡。传统的Web模式在处理高并发及实时性需求的时候，会遇到难以逾越的瓶颈，需要一种高效节能的双向通信机制来保证数据的实时传输。

在此背景下，基于HTML5规范的、有Web TCP之称的 WebSocket应运而生。早期HTML5并没有形成业界统一的规范，各个浏览器和应用服务器厂商有着各异的类似实现，如IBM的MQTT、Comet开源框架等。直到2014年，HTML5终于尘埃落地，正式落实为实际标准规范，各个应用服务器及浏览器厂商逐步开始统一，在 JavaEE7中也实现了WebSocket协议。至此无论是客户端还是服务端的WebSocket都已完备。用户可以查阅HTML5规范，熟悉新的HTML协议规范及WebSocket支持。

## WebSocket 机制

以下简要介绍一下WebSocket的原理及运行机制。WebSocket 是 HTML5 下一种新的协议。它实现了浏览器与服务器全双工通信，能更好的节省服务器资源和带宽并达到实时通讯的目的。它与HTTP一样通过已建立的TCP连接来传输数据，但是它和HTTP最大不同是：WebSocket是一种双向通信协议。在建立连接后，WebSocket服务器端和客户端都能主动向对方发送或接收数据，就像Socket一样；WebSocket需要像TCP一样，先建立连接，连接成功后才能相互通信。

传统HTTP客户端与服务器请求响应模式如下图所示：
<img src="https://pic2.zhimg.com/50/v2-c99efde0caccb49814ea83c126b0e18a_hd.jpg?source=1940ef5c" data-rawwidth="355" data-rawheight="341" class="content_image" width="355"/>WebSocket模式客户端与


服务器请求响应模式如下图：
<img src="https://pic2.zhimg.com/50/v2-e4128e588c6c21216319351ee7eb0bac_hd.jpg?source=1940ef5c" data-rawwidth="340" data-rawheight="278" class="content_image" width="340"/>上图对比可以看出，相


对于传统HTTP每次请求-应答都需要客户端与服务端建立连接的模式，WebSocket是类似Socket的TCP长连接通讯模式。一旦WebSocket连接建立后，后续数据都以帧序列的形式传输。在客户端断开WebSocket连接或Server端中断连接前，不需要客户端和服务端重新发起连接请求。在海量并发及客户端与服务器交互负载流量大的情况下，极大的节省了网络带宽资源的消耗，有明显的性能优势，且客户端发送和接受消息是在同一个持久连接上发起，实时性优势明显。

相比HTTP长连接，WebSocket有以下特点：是**真正的全双工方式**，建立连接后客户端与服务器端是完全平等的，可以互相主动请求。而HTTP长连接基于HTTP，是传统的客户端对服务器发起请求的模式。HTTP长连接中，每次数据交换除了真正的数据部分外，服务器和客户端还要大量交换HTTP header，信息交换效率很低。Websocket协议通过第一个request建立了TCP连接之后，之后交换的数据都不需要发送 HTTP header就能交换数据，这显然和原有的HTTP协议有区别所以它需要对服务器和客户端都进行升级才能实现（主流浏览器都已支持HTML5）。此外还有 multiplexing、不同的URL可以复用同一个WebSocket连接等功能。这些都是HTTP长连接不能做到的。下面再通过客户端和服务端交互的报文对比WebSocket通讯与传统HTTP的不同点：在客户端，new WebSocket实例化一个新的WebSocket客户端对象，请求类似 ws://yourdomain:port/path 的服务端WebSocket URL，客户端WebSocket对象会自动解析并识别为WebSocket请求，并连接服务端端口，执行双方握手过程，客户端发送数据格式类似：
```
GET /webfin/websocket/ HTTP/1.1
Host: localhost
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: xqBt3ImNzJbYqRINxEFlkg==
Origin: http://localhost:8080
Sec-WebSocket-Version: 13
```
可以看到，客户端发起的WebSocket连接报文类似传统HTTP报文，Upgrade：websocket参数值表明这是WebSocket类型请求，Sec-WebSocket-Key是WebSocket客户端发送的一个 base64编码的密文，要求服务端必须返回一个对应加密的Sec-WebSocket-Accept应答，否则客户端会抛出Error during WebSocket handshake错误，并关闭连接。服务端收到报文后返回的数据格式类似：
```
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: K7DJLdLooIwIG/MOpvWFB3y3FE8=
```



