# 防抖和节流

## 防抖（debounce）

> 单位时间内，频繁触发事件，只执行最后一次

-   【例子】王者荣耀英雄回城，只要被打断就要重新来

-   【应用场景】

> 1. 搜索框搜索输入。只需用户最后一次输入完，再发送请求；

> 2. 手机号、邮箱验证输入检测 onchange /oninput 事件

> 3. 窗口大小计算。只需窗口调整完成后，计算窗口大小。防止重复渲染

```js
<input type="text" id="input" />;

//防抖
const debounce = (fn, delay = 1000) => {
	// 定时器
	let timer = null;
	// 将debounce处理结果当作函数返回
	return function () {
		// 每次事件被触发时，都去清除之前的旧定时器
		timer && clearTimeout(timer);
		// 设立新定时器
		timer = setTimeout(() => {
			fn.apply(this, arguments);
		}, delay);
	};
};

/* input事件触发执行的逻辑 */
function trigger(e) {
	console.log(e.target.value);
}
const inputDom = document.getElementById('input');

//不加防抖
inputDom.addEventListener('input', trigger);

// 加防抖
inputDom.addEventListener('input', debounce(trigger));
```

## 节流（throttle）

> 单位时间内，频繁触发事件，只执行一次

-   【例子】王者荣耀英雄技能，在那段时间内你只能用一次该技能，下次想要用，需要等待技能冷却完毕

-   【应用场景】

> 1. 鼠标连续触发某事件（如鼠标连续点击），只在单位时间内执行一次；

> 2. 监听滚动事件 scroll，每隔 100ms 执行一次，实现防抖效果；

> 3.页面尺寸缩放 resize

```js
<input type="text" id="input" />;
//节流
const throttle = (fn, delay = 1000) => {
	// 定时器
	let timer = null;
	// 将throttle处理结果当作函数返回
	return function () {
		// 如果等到了delay才能执行并清空定时器
		if (!timer) {
			// 设立新定时器
			timer = setTimeout(() => {
				//因为在 setTimeout 中是无法删除定时器的，因为定时器还在运作，所以使用timer = null
				timer = null;
				fn.apply(this, arguments);
			}, delay);
		}
	};
};

/* input事件触发执行的逻辑 */
function trigger(e) {
	console.log(e.target.value);
}
const inputDom = document.getElementById('input');

//不加节流
inputDom.addEventListener('input', trigger);

// 加节流
inputDom.addEventListener('input', throttle(trigger));
```
