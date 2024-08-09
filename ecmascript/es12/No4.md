# 逻辑赋值运算符

- `??=` `&&=` `||=`

- `??=` 的判断逻辑和 `??` 一致，左值为 `null` 或 `undefined` 时返回右值，否则返回左值。

- 不同的是 `??=` 包含向左值赋值的操作。类比于于 `+=` `-= `中的等号。

```js
a ||= b; //等价于 	a = a || (a = b)
a &&= b; //等价于	a = a && (a = b)
a ??= b; //等价于	a = a ?? (a = b)
```


```js
// 旧
// let a = null;
// a = a ?? 'squid-Xu';
// console.log(a); //squid-Xu

// a = a && 'squid-Xu';
// console.log(a); //null

// a = a || 'squid-Xu';
// console.log(a); //squid-Xu

// 新
let a = null;
// a ??= 'squid-Xu';
// console.log(a); //squid-Xu

// a &&= 'squid-Xu';
// console.log(a); //null

a ||= 'squid-Xu';
console.log(a); //squid-Xu
```