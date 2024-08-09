# 顶层 await

- 之前await关键字只能在async函数内部使用，在外部使用就会报错: SyntaxError - SyntaxError: await is only valid in async function；

- 在ES13 允许在模块的顶层使用 await， 并且不再需要配合 async函数使用，它允许模块充当大型异步函数，使得我们在 ESM 模块中可以等待资源的加载，只有资源加载完毕之后才会去执行当前模块的代码。


```js
// 动态加载模块
const strings = await import(`/i18n/${navigator.language}`);
```