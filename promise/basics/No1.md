# Promise 介绍与基本使用

## Promise 是什么

> 抽象表达:

-   Promise 是一门新的技术（ES6 规范）
-   Promise 是 JS 中进行异步编程的新解决方案（旧的方案是使用回调函数）

> 具体表达：

-   从语法上来说：Promise 是一个构造函数
-   从功能上来说：Promise 对象用来封装一个异步操作并可以获取其成功/失败的结果值

## 异步操作

-   fs 文件操作

```
require('fs').readFile('./index.html',(err,data)=>{})
```

-   数据库操作

-   AJAX

```
$.get('/server',(data)=>{})
```

-   定时器

```
setTimeout(()=>{},2000)
```
