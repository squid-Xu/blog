# 手写实现 call() apply() bind()函数

## call、apply 和 bind 区别：

-   相同点：

> 作用相同，都是动态修改 this 指向；都不会修改原先函数的 this 指向。

-   异同点：

> **1、执行方式不同：**

> call 和 apply 是改变后页面加载之后就立即执行，是同步代码。

> bind 是异步代码，改变后不会立即执行；而是返回一个新的函数。

> **2、传参方式不同：**

> call 和 bind 传参是一个一个逐一传入。

> apply 可以使用数组的方式传入的 。

> call 和 apply 不能使用剩余参数的方式传参，bind 可以使用剩余参数的方式传入（柯里化）。

> **3、修改 this 的性质不同：**

> call、apply 只是临时的修改一次，也就是 call 和 apply 方法的那一次；当再次调用原函数的时候，它的指向还是原来的指向。

> bind 返回的函数对象会修改 this 的绑定，但原函数 this 指向依然不发生变化。

## call 方法使用：

-   可以传递两个参数。

> 第一个参数是指定函数内部中 this 的指向，也就是函数执行时所在的作用域：

> （1）参数值为 null 或 undefined 或者 this，则等同于指向全局对象

> （2）但不能为空

-   第二个参数是函数调用时需要传递的参数，需要一个一个的传入（param1, aram2, param3... ）

## 手写 call 方法

```js
const foo = { a: 1 };
function bar(b, c) {
	console.log(this.a, b, c);
}

Function.prototype.myCall = function (context, ...args) {
	context = context || window;
	context.fn = this;
	context.fn(...args);
	delete context.fn;
};

bar.call(foo, 1, 2); //1 1 2
bar.myCall(foo, 1, 2); //1 1 2
```

## apply 方法：

-   可以传递两个参数。

-   第一个参数是指定函数内部中 this 的指向，也就是函数执行时所在的作用域：

    > （1）参数值为 null 或 undefined 或者 this，则等同于指向全局对象

    > （2）但不能为空

-   第二个参数是函数调用时需要传递的参数，是一个数组（[param1, param2…]）

```js
const foo = { a: 1 };
function bar(b, c) {
	console.log(this.a, b, c);
}

Function.prototype.myApply = function (context, args) {
	context = context || window;
	context.fn = this;
	context.fn(...args);
	delete context.fn;
};

bar.apply(foo, [1, 2]); //1 1 2
bar.myApply(foo, [1, 2]); //1 1 2
```

## bind 方法：

-   bind 方法用于指定函数内部的 this 指向（执行时所在的作用域），然后返回一个新函数。bind 方法并非立即执行一个函数。

> 第一个参数是指定函数内部中 this 的指向，也就是函数执行时所在的作用域：

> （1）参数值为 null 或 undefined 或者 this，则等同于指向全局对象

> （2）但不能为空

-   第二个参数是函数调用时需要传递的参数，需要一个一个的传入（param1, param2, param3... ）

```js
const foo = { a: 1 };
function bar(b, c) {
	console.log(this.a, b, c);
}

Function.prototype.myBind = function (context, ...args) {
	context = context || window;
	context.fn = this;
	return function () {
		context.fn(...args);
		delete context.fn;
	};
};

bar.bind(foo, 1, 2)(); //1 1 2
bar.myBind(foo, 1, 2)(); //1 1 2
```
