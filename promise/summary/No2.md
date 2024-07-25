# Promise 自定义封装


## 手写Promise

```js
function myPromise(executor) {
    //添加属性
    this.PromiseState = 'pending';
    this.PromiseResult = null;

    // resolve函数
    const resolve = data => {
        // 判断状态
        if (this.PromiseState !== 'pending') return;
        // 1、修改对象的状态（promiseState）
        this.PromiseState = 'fulfilled'; // resolved
        // 2、设置对象结果值（promiseResult）
        this.PromiseResult = data;
    };

    //reject函数
    const reject = data => {
        // 判断状态
        if (this.PromiseState !== 'pending') return;
        // 1、修改对象的状态（promiseState）
        this.PromiseState = 'rejected'; // rejected
        // 2、设置对象结果值（promiseResult）
        this.PromiseResult = data;
    };

    // 同步调用，【执行器函数】
    try {
        executor(resolve, reject);
    } catch (error) {
        // 修改promise对象状态为失败
        reject(error);
    }
}

// 添加then方法
myPromise.prototype.then = function (onResolved, onRejected) {
    //调用回调函数
    if (this.PromiseState === 'fulfilled') {
        onResolved(this.PromiseResult);
    }
    if (this.PromiseState === 'rejected') {
        onRejected(this.PromiseResult);
    }
};

let p = new myPromise((resolve, reject) => {
    //成功
    resolve(1);
    //失败
    reject(2);
    //抛出异常
    // throw '111';
});

// console.log(p);

p.then(
    value => {
        console.log(value);
    },
    reason => {
        console.log(reason);
    }
);
```


## 异步任务回调的执行


```js
function myPromise(executor) {
    //添加属性
    this.PromiseState = 'pending';
    this.PromiseResult = null;
    //声明属性
    this.callback = {};

    // resolve函数
    const resolve = data => {
        // 判断状态
        if (this.PromiseState !== 'pending') return;
        // 1、修改对象的状态（promiseState）
        this.PromiseState = 'fulfilled'; // resolved
        // 2、设置对象结果值（promiseResult）
        this.PromiseResult = data;
        //执行异步成功回调
        this.callback.onResolved?.(this.PromiseResult);
    };

    //reject函数
    const reject = data => {
        // 判断状态
        if (this.PromiseState !== 'pending') return;
        // 1、修改对象的状态（promiseState）
        this.PromiseState = 'rejected'; // rejected
        // 2、设置对象结果值（promiseResult）
        this.PromiseResult = data;
        //执行异步失败回调
        this.callback.onRejected?.(this.PromiseResult);
    };
    // 同步调用，【执行器函数】
    try {
        executor(resolve, reject);
    } catch (error) {
        // 修改promise对象状态为失败
        reject(error);
    }
}

// 添加then方法
myPromise.prototype.then = function (onResolved, onRejected) {
    //调用回调函数
    if (this.PromiseState === 'fulfilled') {
        onResolved(this.PromiseResult);
    }
    if (this.PromiseState === 'rejected') {
        onRejected(this.PromiseResult);
    }
    //判断pending状态
    if (this.PromiseState === 'pending') {
        // 保存回调函数
        this.callback = {
            onResolved,
            onRejected,
        };
    }
};

let p = new myPromise((resolve, reject) => {
    //成功
    setTimeout(() => {
        reject(2);
    }, 1000);
});

p.then(
    value => {
        console.log(value);
    },
    reason => {
        console.log(reason);
    }
);
```