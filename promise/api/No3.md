# 如何使用 Promise


##  Promise 构造函数：Promise (excutor){}

- `executor` 函数：执行器 `(resolve,reject)=> {}`

- `resolve` 函数：内容定义成功时我们调用的函数 `value => {}`

- `reject` 函数：内部定义失败时我们调用的函数 `reason => {}`

:::tip 说明
`executor` 会在 `Promise` 内部立即同步调用，异步操作在执行器中执行
:::

```js
//executor 会在 Promise 内部立即同步调用，异步操作在执行器中执行
let p = new Promise((resolve, reject) => {
	// 同步调用的
	console.log(1);
});
console.log(2);

// 先输出1，后输出 2
```

##   Promise.prototype.then 方法：(onResolved,onRejected)=>{}

- `onResolved` 函数：成功的回调函数`(value)=>{}`

- `onRejected` 函数：失败的回调函数 `(reason)=>{}`

::: tip 说明
指定用于得到成功 value 的成功回调和用于得到失败 reason 的失败回调，返回一个新的 promise 对象
:::

```js{8}
let p = new Promise((resolve, reject) => {
	resolve('success');
});

//执行then方法，返回成功
p.then(
	value => {
		console.log(value); //success
	},
	reason => {
		console.log(reason);
	}
);
```

```js{12}
let p = new Promise((resolve, reject) => {
	resolve('success'); // [!code --]
	reject('error'); // [!code ++]
});

//执行then方法，返回失败
p.then(
	value => {
		console.log(value);
	},
	reason => {
		console.log(reason); //error
	}
);
```

##   Promise.prototype.catch 方法：(onRejected)=> {}

- `onRejected` 函数：失败的回调函数 `(reason)=>{}`

```js
let p = new Promise((resolve, reject) => {
	reject('error');
});

//执行catch方法
p.catch(reason => {
	console.log(reason); //error
});
```