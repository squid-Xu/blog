# Promise Api 方法

## Promise.resolve 方法

-   `Promise.resolve(value)`
-   `value`：成功的数据或 Promise 对象
> 说明：返回一个成功、失败的 Promise 对象

```js
const p1 = Promise.resolve(100);
//如果传入的参数为 非Promise类型的对象，则返回的结果为成功Promise对象
//如果传入的参数为 Promise 对象，则参数的结果决定了 resolve 的结果
console.log(p1); //Promise {<fulfilled>: 100}

const p2 = Promise.resolve(
	new Promise((resolve, reject) => {
		resolve(123);
	})
);
console.log(p2); //Promise {<fulfilled>: 123}

const p3 = Promise.resolve(
	new Promise((resolve, reject) => {
		reject(456);
	})
);
console.log(p3); //Promise {<rejected>: 456}
```

## Promise.reject 方法

-   `Promise.reject(value)`
-   `value`：失败的原因
> 说明：返回一个失败的 Promise 对象


```js
console.log(p1); //Promise {<rejected>: 100}

const p2 = Promise.reject(new Promise((resolve,reject)=>{
    resolve(123)
}))
console.log(p2); //Promise {<rejected>: Promise}

const p3 = Promise.reject(new Promise((resolve,reject)=>{
    reject(456)
}))
console.log(p3); //Promise {<rejected>: Promise}
```

## Promise.all 方法

-   `Promise.all(promise)`
-   `promise`：包含 n个 promise 的数组
> 说明：返回一个新的 Promise 对象，只有所有的Promise都成功才成功，只要有一个失败了就直接失败

```js
let p1 = new Promise((resolve, reject) => {
	resolve(1);
});
let p2 = new Promise((resolve, reject) => {
	resolve(2);
});
let p3 = Promise.resolve(3);
let p4 = Promise.reject(4);

const result = Promise.all([p1, p2, p3]);
console.log(result); //fulfilled  [1,2,3]

const res = Promise.all([p1, p2, p3, p4]);
console.log(res); //rejected  [4]
```

## Promise.race 方法

-   `Promise.race(promise)`
-   `promise`：包含 n个 promise 的数组
> 说明：返回一个新的 Promise 对象，第一个完成的Promise的结果状态就是最终的结果状态


```js
let p1 = new Promise((resolve, reject) => {
	resolve(1);
});
let p2 = new Promise((resolve, reject) => {
	resolve(2);
});
let p3 = Promise.resolve(3);
let p4 = Promise.reject(4);

const result = Promise.race([p1, p2, p3]);
console.log(result); //fulfilled  1

const res = Promise.race([p1, p2, p3, p4]);
console.log(res); //fulfilled  1

const response = Promise.race([p4, p2, p3]);
console.log(response); //rejected  4
```