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

> [!note]
> 总结：for in 适合遍历对象，for of 适合遍历数组。for in 遍历的是数组的索引，对象的属性，以及原型链上的属性。
