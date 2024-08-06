# 扩展运算符


## 作用
- `...` 扩展运算符能将 **数组** 转换为用逗号分隔的 **参数序列**

## 特点

- 1、数组的合并

```js
const arr1 = [1, 2];
const arr2 = [3, 4];
console.log(...arr1, ...arr2); //1 2 3 4
```

- 2、数组的克隆

```js
const arr1 = [1, 2];
const arr2 = [...arr1];
console.log(arr2); //[1,2]
```

- 3、将伪数组转为真正的数组

```js
function add() {
    // arguments 是一个伪数组，不能使用数组的方法
    console.log([...arguments]); //[1, 2, 3, 4]
}
add(1, 2, 3, 4);
```