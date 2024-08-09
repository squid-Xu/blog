# BigInt

- 表示（-2^53-1~2^53-1）之间的数据

```js
// 大整形
let n = 100n;
console.log(typeof n); // bigint
console.log(n); // n

// 函数
let n1 = 123;
console.log(BigInt(n1)); // 123n
//转化的必须是整数，
// console.log(BigInt(1.2)); // Error; The number 1.2 cannot be converted to a BigInt because it is not an integer

// 大数值运算
let max = Number.MAX_SAFE_INTEGER;
console.log(max); //9007199254740991
console.log(max + 1); //9007199254740992
console.log(max + 2); //9007199254740992  // 这个计算就不对了

console.log(BigInt(max)); //9007199254740991n
//BigInt不能直接与普通数值做运算
// console.log(BigInt(max) + 1); // Error; Cannot mix BigInt and other types, use explicit conversions
console.log(BigInt(max) + BigInt(1)); //9007199254740992n
```
