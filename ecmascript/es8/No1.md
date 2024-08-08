# async 和 await


## 作用

- async和await两种语法结合可以让异步代码像同步代码一样

- async函数

> async函数的返回值为promise对象，

> promise对象的结果由async函数执行的返回值决定

```js
// async 函数
async function fn() {
    // 返回一个字符串
    return 'squid-Xu'; // Promise {<fulfilled>: 'squid-Xu'}

    // 返回的结果不是一个Promise类型的对象，返回的结果就是成功Promise对象
    return; //Promise {<fulfilled>: undefined}

    // 抛出错误，返回的结果是一个失败的promise
    throw new Error('出错了'); // Promise {<rejected>: Error: 出错了

    // 返回的结果如果是一个 Promise 对象
    return new Promise((resolve, reject) => {
        // resolve('success');  // 成功的结果
        reject('error'); // 失败的结果
    });
}

const result = fn();
console.log(result);
```

- await表达式

> await必须写在async函数中

> await右侧的表达式一般为promise对象

> await 返回的是promise成功的值

> await的promise失败了，就会抛出异常，需要通过try…catch 捕获处理


```js
// 创建 promise 对象
const p = new Promise((resolve, reject) => {
    resolve('success'); // 成功的结果
    // reject('error'); // 失败的结果
});

// await 要放在 async 函数中
async function main() {
    try {
        let result = await p;
        console.log(result); //success
    } catch (error) {
        console.log(error);
    }
}

// 调用
main();
```

## 特点
