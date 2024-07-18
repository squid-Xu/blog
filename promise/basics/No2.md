# Promise 初体验

```js
// 生成随机数
function rand(m, n) {
	return Math.ceil(Math.random() * (n - m + 1) + m - 1);
}

/**
 * resolve 解决（成功）  函数类型数据，参数名可以组定义（一般默认成功resolve）
 * reject  决绝（失败）  函数类型数据，参数名可以组定义（一般默认失败reject）
 */
const p = new Promise((resolve, reject) => {
	setTimeout(() => {
		let n = rand(1, 100); //获取1 - 100 的一个随机数

		if (n <= 30) {
			resolve(n);
		} else {
			reject(n);
		}
	}, 1000);
});

/**
 * 接收两个参数，两个参数都是函数形式
 * 第一个函数接收成功的回调函数
 * 第二个函数接收失败的回调函数
 */
p.then(
	a => {
		alert('成功了:' + a);
	},
	b => {
		alert('失败了:' + b);
	}
);
```
