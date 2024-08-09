# 空值合并

- 这是一种新的语法，用于给变量赋值时，如果变量的值为 null 或 undefined，就使用默认值。


```js
const a = null;
const b = a ?? 'squid-Xu';
console.log(b); // 输出: 'squid-Xu'
```