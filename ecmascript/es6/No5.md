# 简化对象写法

## 作用
- ES6允许在大括号里面，直接写入变量和函数，作为对象的属性和方法

## 特点
- 简洁

```js
let name = 'squid-Xu';
let change = function () {
    console.log('111');
};
const obj = {
    name, //name:name
    change,
    say() {
        console.log('2222');
    },
};
```