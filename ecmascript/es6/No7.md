# 函数参数默认值

## 作用

- ES6允许给函数参数赋值初始值

## 特点

- 1、形参初始值 具有默认值的参数，一般位置要靠后（潜规则）

```js {5,12,18}
function add(a, b, c) {
    return a + b + c;
}
let result = add(1, 2);
console.log(result); //NaN


function add(a, c = 10, b) {
    return a + b + c;
}
let result = add(1, 2);
console.log(result); //NaN

function add(a, b, c = 10) {
    return a + b + c;
}
let result = add(1, 2);
console.log(result); //13
```

- 2、与解构赋值结合

```js
function add({ a = 10, b, c, d }) {
    console.log(a, b, c, d); // 10,2,3, 4
}
let result = add({
    b: 2,
    c: 3,
    d: 4,
});
```