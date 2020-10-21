# Git

## 如何比较远程分支与本地代码的区别？

### 首先我们一定要拉取服务器端的代码：
```
git diff master origin/master
```

### 接下来可以使用命令进行对比，注意这个命令是可以详细列出文件改动内容
```
 git diff master origin/master
```

### 这个命令给出的是二者区别的统计信息
```
git diff --stat master origin/master
```

# 如何进行