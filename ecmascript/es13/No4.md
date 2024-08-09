# .at 方法返回指定索引的元素

- `.at()` 是数组新增的一个方法，通过传递给定索引来获取数组元素，这个索引可以是正数也可以是负数，当索引是正数时效果和 [] 是一样的，当索引是负数时就会从数组的最后一项开始。

```js
const arr = [1, 2, 3, 4, 5];
arr[arr.length - 1]; // 5
const arr = [1, 2, 3, 4, 5];
arr.at(-1); // 5
```


::: tip 支持类型
- String
- Array
- Typed Array
:::