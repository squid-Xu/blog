# Promise.any & AggregateError


- Promise.any() 接收一个Promise可迭代对象，只要其中的一个 promise 成功，就返回那个已经成功的 promise 。如果可迭代对象中没有一个 promise 成功（即所有的 promises 都失败/拒绝），就返回一个失败的 promise


```js
const promise1 = Promise.reject('Error 1');
const promise2 = new Promise(resolve =>
    setTimeout(() => {
        resolve('Success 2');
    }, 100)
);
const promise3 = new Promise(resolve =>
    setTimeout(() => {
        resolve('Success 3');
    }, 200)
);

Promise.any([promise1, promise2, promise3])
    .then(value => {
        console.log(value); // "Success 2"
    })
    .catch(error => {
        console.log(error);
    });
```

- 在这个例子中，promise2 是第一个成功解决的 Promise，所以 Promise.any() 返回 promise2 的解决值 "Success 2"。


### 错误处理

- 如果所有的 Promise 都被拒绝，Promise.any() 将返回一个包含所有拒绝原因的 AggregateError。

```js
const promise1 = Promise.reject('Error 1');
const promise2 = Promise.reject('Error 2');
const promise3 = Promise.reject('Error 3');

Promise.any([promise1, promise2, promise3])
    .then(value => {
        console.log(value);
    })
    .catch(error => {
        console.log(error); // AggregateError: All promises were rejected
    });
```

- 在这个例子中，所有的 Promise 都被拒绝，因此 Promise.any() 返回一个 AggregateError，其中包含所有的拒绝原因。