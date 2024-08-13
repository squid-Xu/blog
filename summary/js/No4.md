# new 的过程

## 前言

> 在 JavaScript 中, 通过 new 操作符可以创建一个实例对象，而这个实例对象继承了原对象的属性和方法。因此，new 存在的意义在于它实现了 JavaScript 中的继承，而不仅仅是实例化了一个对象。

## 实现 new

-   首先我们要清楚，在使用 new 操作符时，js 做了哪些事情:

> js 在内部创建了一个对象

> 这个对象可以访问到构造函数原型上的属性，所以需要将对象与构造函数连接起来

> 构造函数内部的 this 被赋值为这个新对象(即 this 指向新对象)

> 返回原始值需要忽略，返回对象需要正常处理

```js
//没有返回值
function Person(name, age) {
	this.name = name;
	this.age = age;
}
Person.prototype.say = function () {
	console.log(this.name, this.age);
};
const p1 = new Person('张三', 20);
console.log(p1); //Person {name: '张三', age: 20}
console.log(p1.name); //张三
console.log(p1.age); //20
console.log(p1.say()); //张三 20

//返回一个对象
function Person2(name) {
	this.name = name;
	return {
		age: 12,
	};
}

const p2 = new Person2('李四');

console.log(p2); //{age: 12}

//返回一个非对象
function Person3(name) {
	this.name = name;
	return 12;
}

const p3 = new Person3('王五');

console.log(p3); //Person3 {name: '王五'}

//返回null:
function Person4(name) {
	this.name = name;
	return null;
}

const p4 = new Person4('小刘');

console.log(p4); //erson4 {name: '小刘'}

//模拟new实现
function myNew(fn, ...args) {
	const obj = {};
	obj.__proto__ = fn.prototype;
	const result = fn.apply(obj, args);
	return result instanceof Object ? result : obj;
}

const p5 = myNew(Person, '小七', 30);
console.log(p5); //Person {name: '小七', age: 30}
console.log(p5.name); //小七
console.log(p5.age); //30
console.log(p5.say()); //小七 30
```
