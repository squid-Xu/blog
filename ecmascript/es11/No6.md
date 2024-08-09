# globalThis


- 始终指向全局对象

- JavaScript 可以运行在不同的环境，浏览器为 window、Node.js 为 global。为了能够统一全局环境变量，引入了 globalThis。

```js
window === globalThis // 浏览器环境
global === globalThis // Node.js 环境
```