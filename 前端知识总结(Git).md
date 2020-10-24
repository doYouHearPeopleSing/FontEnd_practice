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

## 如何进行版本回退
### 首先我们要查看我们想要跳转到哪个版本上，查看序列号
```
git log
```

### 在查看序列号之后呢，我们可以进行跳转
```
git reset xxxx
```
### 我们该如何回去呢？
```
git reflog
```
查看以往的历史操作

之后可以看到你跳转之前的分支所在

# 如何不使用 MERGE 进行分支合并？
```
git rebase
``` 

# 关于 Git stash 命令的使用
```
git stash
```
将改动暂时存储，之后可以拿出来

```
git stash pop
```

查看存储记录
```
git stash list
```



