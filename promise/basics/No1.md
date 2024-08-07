# Promise 介绍与基本使用

## Promise 是什么

#### 抽象表达:

-   `Promise` 是一门新的技术（ES6 规范）
-   `Promise` 是 `JS` 中进行异步编程的新解决方案（旧的方案是使用回调函数）

#### 具体表达：

-   从语法上来说：`Promise` 是一个构造函数
-   从功能上来说：`Promise` 对象用来封装一个异步操作并可以获取其成功/失败的结果值

## 异步操作

####  fs 文件操作

```js
require('fs').readFile('./index.html',(err,data)=>{})
```

####  数据库操作

```js
xxx
```

####  AJAX

```js
$.get('/server',(data)=>{})
```

####  定时器

```js
setTimeout(()=>{},2000)
```

## 为什么要用 Promise？

#### 指定回调函数的方式更加灵活

-  旧的：必须在启动异步任务前指定

-  `promise`: 启动异步任务 => 返回 `promise` 对象 => 给 `promise` 对象绑定回调函数（甚至可以在异步任务结束后指定/多个）

#### 支持链式调用，可以解决回调地狱问题

- 1.  什么是回调地狱？

> 回调函数嵌套调用，外部回调函数异步执行的结果是嵌套的回调执行的条件

- 2. 回调地狱的缺点？

> 不便于阅读
> 不便于异常处理

- 3. 解决方案？

> `promise` 链式调用
