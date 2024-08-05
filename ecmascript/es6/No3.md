# 变量的解构赋值

## 作用
- ES6允许按照一定模式从数组和对象中提取值，对变量进行赋值
## 特点
- 1、数组的解构

```js
const A = [1, 2, 3, 4];
let [a, b, c, d] = A;
console.log(a); //1
console.log(b); //2
console.log(c); //3
console.log(d); //4
```

- 2、对象的解构

```js
const obj = {
    name: 'squid-Xu',
    say: function () {
        console.log('我会说话');
    },
};
let { name, say } = obj;
console.log(name); //squid-Xu
say(); //我会说话
```