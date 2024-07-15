# for...in 和 for...of 的区别

## 1、循环数组

> [!TIP]
> 区别一：for in 和 for of 都可以遍历数组，for in 输出的是数组的下标，for of 输出的是数组的每一项的值

```js
let arr = [11, 22, 33, 44, 55];

for (let key in arr) {
	console.log(key); //输出 0, 1, 2, 3, 4
}

for (let value of arr) {
	console.log(value); //输出 11, 22, 33, 44, 55
}
```

## 2、遍历对象

> [!tip]
> 区别二：for in 可以遍历对象，for of 不能遍历对象，只能遍历带有 iterator 接口的，例如 Set,Map,String,Array

```js
let obj = { name: 'zhangsan', age: 18 };

for (let key in obj) {
	console.log(key); // 输出 name，age
	console.log(obj[key]); //输出 zhangsan，18
}

for (let value of obj) {
	console.log(value); //报错 Uncaught TypeError: obj is not iterable
}
```

## 3、遍历字符串

```js
let str = 'hello';

for (let key in str) {
	console.log(key); //输出 0, 1, 2, 3, 4
}

for (let key of str) {
	console.log(key); //输出 h, e, l, l, o
}
```

## 4、遍历 Set

-   这是因为 for...in 循环是为遍历对象的可枚举属性而设计的，而 Set 对象的元素不是可枚举属性。

```js
let set = new Set(['11', '22', '33']);

for (let key in set) {
	console.log(key); // 不会输出任何内容
}

for (let key of set) {
	console.log(key); //输出 11, 22, 33
}
```

## 5、遍历 Map

-   这是因为 for...in 循环遍历的是对象的属性，而 Map 对象的键（key）是不可枚举的。

```js
let map = new Map([
	['a', 1],
	['b', 2],
	['c', 3],
]);

for (let key in map) {
	console.log(key); // 不会输出任何内容
}

for (let key of map) {
	console.log(key); //输出 ['a', 1], ['b', 2], ['c', 3]
}
```

## 注意事项

> [!caution]
> 总结：for in 适合遍历对象，for in 遍历的是数组的索引，对象的属性，以及原型链上的属性。

-   遍历顺序有可能不是按照实际数组的内部顺序

-   使用 for in 会遍历数组所有的可枚举属性，包括原型，如果不想遍历原型方法和属性的话，可以在循环内部判断一下，使用 hasOwnProperty()方法可以判断某属性是不是该对象的实例属性

```js
let arr = [11, 22, 33, 44, 55];

Array.prototype.a = 111;
Array.prototype.say = {};

for (let key in arr) {
	console.log(key); //输出 0, 1, 2, 3, 4, a, say
}

for (let key in arr) {
	if (arr.hasOwnProperty(key)) {
		console.log(key); //输出 0, 1, 2, 3, 4
	}
}
```

> [!caution]
> 总结：for of 遍历的是数组元素值，而且 for of 遍历的只是数组内的元素，不包括原型属性和索引

```js
let arr = [11, 22, 33, 44, 55];

Array.prototype.a = 111;
Array.prototype.say = {};

for (let key of arr) {
	console.log(key); //输出 11, 22, 33, 44, 55
}
```
