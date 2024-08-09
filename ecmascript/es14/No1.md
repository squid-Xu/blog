# Array 支持从尾部查找

- 新增两个方法： `.findLast()`、`.findLastIndex()`​ 从数组的最后一个元素开始查找，可以同 `.find()`、`.findIndex()` 做一个对比。

```js
const arr = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }];

// find vs findLast
console.log(arr.find(n => n.value % 2 === 1)); // { value: 1 }
console.log(arr.findLast(n => n.value % 2 === 1)); // { value: 3 }

// findIndex vs findLastIndex
console.log(arr.findIndex(n => n.value % 2 === 1)); // 0
console.log(arr.findLastIndex(n => n.value % 2 === 1)); // 2
```