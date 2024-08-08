# Object.fromEntries()


## 作用

- 用于将键值对数组转换为对象

```js
const entries = [
    ['a', 1],
    ['b', 2],
    ['c', 3],
];
const obj = Object.fromEntries(entries);
console.log(obj); // 输出: { a: 1, b: 2, c: 3 }
```

- 也可以用于将Map对象转换为普通对象


```js
const map = new Map();
map.set('key1', 'value1');
map.set('key2', 'value2');
const objFromMap = Object.fromEntries(map);
console.log(objFromMap); // { key1: 'value1', key2: 'value2' }
```