# Promise.allSettled

```js
// 声明两个promise对象
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('成功-1');
    }, 1000);
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('成功-2');
        reject('失败');
    }, 1000);
});

// 调用 allSettled 方法
const result = Promise.allSettled([p1, p2]);
console.log(result); // 返回结果总是成功的
```