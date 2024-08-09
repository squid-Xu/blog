# 动态import()



```js
// index.html
<body>
    <button id="btn">测试</button>
    <script src="./1.js" type="module"></script>
</body>

// 1.js
// 获取元素
const btn = document.getElementById('btn');

btn.onclick = function () {
	import('./2.js').then(res => {
		console.log(res); //Module {Symbol(Symbol.toStringTag): 'Module'}
		res.hello(); //你好
	});
};

// 2.js

export function hello() {
	console.log('你好');
}

```