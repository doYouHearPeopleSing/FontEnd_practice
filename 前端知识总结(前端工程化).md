https://juejin.im/entry/6844903569548640269

https://my.oschina.net/vivotech/blog/4407304
这个链接是关于 babel 的工作原理解析


Babel 的三个主要处理步骤分别是： 解析（parse），转换（transform），生成（generate）


# NPM
npm 是世界上最大的软件注册表，来自世界各地的开源软件开发者使用 npm 互相分享和借鉴   

npm 由三个部分组成：
1. 网站
2. 注册表
3. 命令行工具

网站 是开发者查找包（package）、设置参数以及管理 npm 使用体验的主要途径。

注册表 是一个巨大的数据库，保存了每个包（package）的信息。

CLI 通过命令行或终端运行。开发者通过 CLI 与 npm 打交道。

## 本地安装

可以使用下面的命令来安装一个包：

```
npm install <package_name>
```

## npm install 之后发生了什么？
将会在当前的目录下创建一个 node_modules 的目录（如果不存在的话），然后将下载的包保存到这个目录下。

## 哪个版本的包会被安装了？
在本地目录中如果没有 package.json 这个文件的话，那么最新版本的包会被安装。

如果存在 package.json 文件，则会在 package.json 文件中查找针对这个包所约定的语义化版本规则，然后安装符合此规则的最新版本。

## npm 如何创建一个 package.json 文件？
```
npm-init
```
create a package.json file

## package.json 文件的作用

每个项目的根目录下面，一般都有一个`package.json`文件，定义了这个项目所需要的各种模块，以及项目的配置信息（比如名称、版本、许可证等元数据）。`npm install`命令根据这个配置文件，自动下载所需的模块，也就是配置项目所需的运行和开发环境。

package.json文件可以手工编写，也可以使用npm init命令自动生成。

 `npm init`
这个命令采用互动方式，要求用户回答一些问题，然后在当前目录生成一个基本的package.json文件。所有问题之中，只有项目名称（name）和项目版本（version）是必填的，其他都是选填的。

有了`package.json`文件，直接使用`npm install`命令，就会在当前目录中安装所需要的模块。

`npm install`
如果一个模块不在package.json文件之中，可以单独安装这个模块，并使用相应的参数，将其写入package.json文件之中。

 `npm install express --save`
 `npm install express --save-dev`
上面代码表示单独安装`express`模块，`--save`参数表示将该模块写入`dependencies`属性，`--save-dev`表示将该模块写入`devDependencies`属性。


# Yarn

## Yarn 是什么？
Yarn 对你的代码来说是一个`包管理器`。它可以让你使用并分享 全世界开发者的（例如 JavaScript）代码。 Yarn 能够`快速`、`安全`、 并`可靠`地完成这些工作

1. 快速 Yarn 缓存了每个下载过的包，所以再次使用时无需重复下载。 同时利用并行下载以最大化资源利用率，因此安装速度更快。

2. 安全 在执行代码之前，Yarn 会通过算法校验每个安装包的完整性。

3. 可靠 使用详细、简洁的锁文件格式和明确的安装算法，Yarn 能够保证在不同系统上无差异的工作。

代码通过 包（package） (或者称为 模块（module）) 的方式来共享。 

一个包里包含所有需要共享的代码，以及描述包信息的文件，称为 package.json

## Yarn 的基本命令
初始化一个新项目

```
yarn init
```
添加依赖包
```
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]
```

升级依赖包
```
yarn upgrade [package]
yarn upgrade [package]@[version]
yarn upgrade [package]@[tag]
```
移除依赖包
```
yarn remove [package]
```
安装项目的全部依赖
```
yarn
```
或者
```
yarn install
```


# webpack

webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle