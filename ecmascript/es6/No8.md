# rest参数


## 作用

- ES6引入rest参数，用于获取函数的实参，用来代替arguments

## 特点

- 1、ES5获取实参的方式

```js
function add() {
    // arguments 是一个伪数组，不能使用数组的方法
    console.log(arguments); //Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]
}
add(1, 2, 3, 4);
```
- 2、rest参数

```js
function add(...args) {
    // args 是一个数组，可以使用数组的方法
    console.log(args); //[1, 2, 3, 4]
}
add(1, 2, 3, 4);

 //有多个参数时，rest参数必需放到参数的最后面
function add(a, b, ...args) {
    console.log(a, b, args); // 1, 2, [3, 4]
}
add(1, 2, 3, 4);
```