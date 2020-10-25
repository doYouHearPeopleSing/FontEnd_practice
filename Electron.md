Electron
======

# 一句话介绍什么是 Electron ?
使用 JavaScript，HTML 和 CSS 构建跨平台的桌面应用程序

如果你可以建一个网站，你就可以建一个桌面应用程序

Electron 是一个使用 JavaScript, HTML 和 CSS 等 Web 技术创建原生程序的框架

它负责比较难搞的部分，你只需把精力放在你的应用的核心上即可

# Electron 的特性？
1. 基于 Web 技术：Electron 基于 Chromium 和 Node.js，让我们可以使用HTML/CSS/JavaScript 构建应用
2. Electron 兼容 Mac/Windows/Linux 可以构建出三个平台的应用程序

# Electron 的三个主要支柱

1. `Chromium` for displaying web content
2. `Node.js` for working with the local filesystem and the operating system
3. `Custom APIs` for working with often-needed OS native functions

# Main and Renderer Processes
The Main process creates web pages by creating BrowserWindow instances. Each BrowserWindow instance runs the web page in its Renderer process. When a BrowserWindow instance is destroyed, the corresponding Renderer process gets terminated as well.


The Main process manages all web pages and their corresponding Renderer processes.
--------------------

The Renderer process manages only the corresponding web page. A crash in one Renderer process does not affect other Renderer processes.


The Renderer process communicates with the Main process via IPC to perform GUI operations in a web page. Calling native GUI-related APIs from the Renderer process directly is restricted due to security concerns and potential resource leaka

