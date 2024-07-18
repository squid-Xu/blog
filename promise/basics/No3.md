# Promise 实践练习-fs 读取文件

> [!WARNING]
> 以下代码需要在 node.js 中运行

## 原始方法

```js
const fs = require('fs');

//content.txt  你好！
fs.readFile('./content.txt', (err, data) => {
	//如果出错，则抛出错误
	if (err) throw err;
	//输出文件内容
	console.log(data); // <Buffer e4 bd a0 e5 a5 bd ef bc 81>
});
```

## 改造 Promise 形式

```js
const fs = require('fs');

const p = new Promise((resolve, reject) => {
	//content.txt  你好！
	fs.readFile('./content.txt', (err, data) => {
		//如果出错，则抛出错误
		if (err) reject(err);
		//输出文件内容
		resolve(data); // <Buffer e4 bd a0 e5 a5 bd ef bc 81>
	});
});

p.then(
	value => {
		console.log(value); // <Buffer e4 bd a0 e5 a5 bd ef bc 81>
	},
	reason => {
		console.log(reason);
	}
);
```

## 封装 Promise 调用

```js
function mineReadFile(path) {
	return new Promise((resolve, reject) => {
		//读取文件
		require('fs').readFile(path, (err, data) => {
			//判断
			if (err) reject(err);
			//成功
			resolve(data);
		});
	});
}

mineReadFile('./content.txt').then(
	value => {
		console.log(value); // <Buffer e4 bd a0 e5 a5 bd ef bc 81>
	},
	reason => {
		console.log(reason);
	}
);
```

## 使用 Node 中的 util.promisify()方法的基本使用和实现

```js
//引入util模块
const util = require('util');
//引入 fs 模块
const fs = require('fs');
//返回一个新的函数
let mineReadFile = util.promisify(fs.readFile);

mineReadFile('./content.txt').then(
	value => {
		console.log(value); //<Buffer e4 bd a0 e5 a5 bd ef bc 81>
	},
	reason => {
		console.log(reason);
	}
);
```
