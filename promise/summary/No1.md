# Promise 关键问题

## 一、如何改变 Promise状态

- 1、`resolve` 函数，如果当前是 `pending` 就会变为 `resolved`

- 2、`reject` 函数，如果当前是 `pending` 就会变为 `rejected`

- 3、抛出错误，如果当前是 `pending` 就会变为 `rejected`


```js
let p = new Promise((resolve, reject) => {
    // resolve 函数
    // resolve(1); // pending  => fulfilled
    // reject 函数
    // reject(2); // pending  => rejected
    //抛出错误
    throw 'error'; // pending  => rejected
});
console.log(p);
```


## 二、能否执行多个回调

- 一个 `promise` 指定多个成功/失败回调函数，都会调用 ?

> 当 `promise` 改变对应状态时都会调用

```js
let p = new Promise((resolve, reject) => {
    resolve(1);
});

// 指定回调 - 1
p.then(value => {
    console.log(value); // 1
});

// 指定回调 - 2
p.then(value => {
    console.log(value); // 1
});
```

## 三、改变状态与指定回调（注意：不是执行回调）的顺序问题

#### 改变 promise 状态和指定回调函数谁先谁后？

- 1、都有可能，正常情况下是先指定回调再改变状态，但也可以先改变状态再指定回调

#### 如何先改变状态再指定回调？

- 在执行器中直接调用 `resolve()/reject()`

- 延迟更长时间才调用 `then()`

```js
// 改变状态的resolve()和指定回调的then()谁先执行？
let p = new Promise((resolve, reject) => {
    //同步任务，先执行resolve()后指定回调then()
    resolve(1);
});

p.then(
    value => {
        console.log(value); // 1
    },
    reason => {
        console.log(reason);
    }
);
```

```js
// 改变状态的resolve()和指定回调的then()谁先执行？
let p = new Promise((resolve, reject) => {
    //异步任务，先指定回调then()后执行resolve()
    setTimeout(() => {
        resolve(1);
    }, 1000);
});

p.then(
    value => {
        console.log(value); // 1
    },
    reason => {
        console.log(reason);
    }
);
```

####  什么时候才能得到数据？

- 如果先指定的回调，那当状态发生改变时，回调函数就会调用，得到数据

- 如果先改变的状态，那当指定回调时，回调函数就会立即调用，得到数据

::: danger 注意
 同步：先改变状态 -> 再指定回调 -> 再执行回调函数

 异步：先指定回调 -> 再改变状态 -> 再执行回调函数
:::

## 四、then方法返回结果由什么决定

- `promise.then()` 返回的新promise的结果状态由什么决定？

### 1、简单表达：

- 由 `then()` 指定的回调函数执行的结果决定

### 2、详细表达：

- 1、如果抛出异常，新 `promise` 变为 `rejected`，`reason` 为抛出的异常，

- 2、如果返回的是非 `promise` 的任意值，新 `promise` 变为 `resolved`，`value` 为返回值

- 3、如果返回的是另一个新 `promise`，此 `promise` 的结果就会变为新的 `promise` 的结果


```js
let p = new Promise((resolve, reject) => {
    resolve(1);
});

//执行then方法
const result = p.then(
    value => {
        // console.log(value);
        // 1、抛出错误
        // throw 'error'; // rejected   error
        // 2、返回结果是非Promise类型对象
        // return 1; // fulfilled    1
        // 3、返回结果是Promise对象
        return new Promise((resolve, reject) => {
            // resolve(1); // fulfilled   1
            reject(2); // rejected  2
        });
    },
    reason => {
        console.log(reason);
    }
);

console.log(result);
```

## 五、串联多个任务

- 1、`promise` 的 `then()` 返回一个新的 `promise`，可以形成 `then()` 的链式调用

- 2、通过 `then` 的链式调用串联多个同步/异步任务


```js
let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 1000);
});

p.then(
    value => {
        return new Promise((resolve, reject) => {
            resolve(2);
        });
    },
    reason => {
        console.log(reason);
    }
)
    .then(
        value => {
            console.log(value); //2
        },
        reason => {
            console.log(reason);
        }
    )
    .then(
        value => {
            console.log(value); //undefined ，因为上一个回调没有return，所以默认就是undefined
        },
        reason => {
            console.log(reason);
        }
    );
```

## 六、异常穿透

- 1、当使用 `promise` 的 `then` 链式调用时，可以在最后指定失败的回调，

- 2、前面任何操作出了异常，都会传到最后失败的回调中处理

```js
let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(1);
    }, 1000);
});

p.then(value => {
    console.log(value);
}).then(value => {
    console.log(value);
}).then(value => {
    console.log(value);
}).catch(reason=>{
    console.log(reason); // 1
});
```

## 七、如何中断Promise链

- 1、当使用 `promise` 的 `then` 链式调用时，在中间中断，不再调用后面的回调函数

- 2、办法：在回调函数中返回一个 `pendding` 状态的 `promise` 对象

```js
let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 1000);
});

p.then(value => {
    console.log(111); // 111 
    //有且只有一个方式,后续的输出不再执行
    return new Promise(()=>{})
}).then(value => {
    console.log(222);
}).then(value => {
    console.log(333);
}).catch(reason=>{
    console.log(reason); 
});
```