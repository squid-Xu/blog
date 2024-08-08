# 扩展运算符 Rest/Spread 属性


## 作用

- Rest参数与spread扩展运算符在ES6中已经引入，不过ES6中只针对于数组

- 在ES9中为对象提供了像数组一样的rest参数和扩展运算符

```js
function add({ a, b, ...data }) {
    console.log(a); // 1
    console.log(b); // 2
    console.log(data); // {c: 3, d: 4}
}

add({
    a: 1,
    b: 2,
    c: 3,
    d: 4,
});
```


```js
const obj1 = {
    a: 1,
    b: 2,
};
const obj2 = {
    c: 3,
    d: 4,
};

console.log({ ...obj1, ...obj2 }); //{a: 1, b: 2, c: 3, d: 4}
```