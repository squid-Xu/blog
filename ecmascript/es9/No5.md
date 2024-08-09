# Promise.finally

- `Promise.finally` 是在 Promise 结束（不管是成功还是失败）后，无论如何都会执行的代码块。

```js
const fetchData = new Promise((resolve, reject) => {
    // 模拟异步操作
    setTimeout(() => {
        resolve('Data fetched');
    }, 1000);
});

fetchData
    .then(data => console.log(data))
    .catch(error => console.error(error))
    .finally(() => console.log('Promise finished'));
```