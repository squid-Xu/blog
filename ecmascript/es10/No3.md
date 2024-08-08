# 数组方式扩展 flat() 和 flatMap()

```js
const arr = [1, 2, 3, [12, 2, [2, 3]]];

const res = arr.flat(2);
console.log(res); //[1, 2, 3, 12, 2, 2, 3]

const result = res.flatMap(item => [item * 10]);
console.log(result); // [10, 20, 30, 120, 20, 20, 30]
```