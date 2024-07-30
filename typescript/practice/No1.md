# 索引签名


##  索引签名（Index Signatures）

- 索引签名是一种定义对象类型的方式，它允许使用数字或字符串或symbol作为索引来访问对象的属性。

:::danger 总结
只要记住一句话，批量描述 `key` 的一种方式
:::

### 字符串索引签名：

> 字符串索引签名可以定义一个对象，该对象可以接受任何字符串作为属性名，并且每个属性都有一个特定的类型。


```js{6}
interface T {
    [propName: string]: number
}
let obj: T = {
    "name": 100,
    "age": "200"  // 不能将类型“string”分配给类型“number”
}
```

:::tip 提示
上述例子中`propName`是索引签名的名称，只是为了可读性，其他没有任何意义，可以改写成任意名称。后面的两个类型分别表示 **属性键的类型**和**对应值的类型**。
:::

### 数字索引签名：
> 数字索引签名可以定义一个对象，该对象可以接受任何数字作为索引，并且每个索引处的值都有一个特定的类型。

```js{4,7}
interface T {
    [index: number]: string
}
let arr: T = ["1", "2", 3] // 第三项：不能将类型“number”分配给类型“string”
let obj: T = {
    0: '0', // ok
    a: '1' // 对象字面量只能指定已知属性，并且“a”不在类型“T”中
}
```
:::warning 注意事项
- 所有成员都必须符合字符串的索引签名

> 当你声明一个索引签名时，所有明确的成员都必须符合索引签名
::::

```js{14,15}
const symbol = Symbol("key");
interface A {
    [y: string]: string;
}
let a: A = {
    x: "1", // ok
    symbol: "1",  // ok
    1: "1",  // ok
};
interface B {
    [x: number]: string;
}
let b: B = {
    x: '1', //  对象字面量只能指定已知属性，并且“x”不在类型“B”中
    symbol: '1',  //  对象字面量只能指定已知属性，并且“symbol ”不在类型“B”中
    1: "1",  // ok
};
```

```js{3}
interface T {
    name: string; // Ok
    age?: number; // 类型“number | undefined”的属性“age”不能赋给“string”索引类型“string”
    sex?: undefined; // OK
    [propName: string]: string | undefined;
}
```

### 同时拥有 string 和 number 类型的索引签名 (不常用)

```js
interface Animal {
    name: string;
}
interface Dog extends Animal {
    breed: string;
}

interface T1 {
    [a: string]: Dog;
    [b: number]: Animal; // Error
}

interface T2 {
    [a: string]: Animal;
    [b: number]: Dog; // OK
}
```
:::tip 提示
可以同时使用两种类型的索引，但 **数字索引的返回值** 必须是 **字符串索引返回值** 类型的 **子类型**。 因为当使用 `number` 来索引时，`JavaScript` 会将它转换成 `string` 然后再去索引对象
:::