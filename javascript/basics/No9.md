# 强制类型转换

-   指将一个数据类型强制转换为其他的数据类型

-   类型转换主要指，将其他的数据类型，转换为 `String` `Number` `Boolean`

## 将其他的数据类型转换 String

### 方式一：

-   调用被转换数据类型的 `toString()` 方法

-   该方法不会影响到原变量，它会将转换的结果返回

> [!tip]
> `null` 和 `undefined` 这两个值没有 `toString()` 方法，如果调用会报错

```js
var a = 123;
a = a.toString();
console.log(typeof a); //string
console.log(a); // "123"

var a = true;
a = a.toString();
console.log(typeof a); //string
console.log(a); // "true"

var a = null;
// a = a.toString(); //Cannot read properties of null (reading 'toString')

var a = undefined;
// a = a.toString(); //Cannot read properties of undefined (reading 'toString')
```

### 方式二:

- 调用 `String()` 函数，并将被转换的数据作为参数传递给函数

- 使用 `String()` 函数做强制类型转换时

> 对于 `Number` 和 `Boolean` 实际上就是调用的 `toString()` 方法

> 对于 `null` 和 `undefined` ，就不会调用 `toString()` 方法

> [!tip]
> 它会将 `null` 直接转换为 `"null"`, `undefined` 直接转换为 `"undefined"`


```js
var a = 123;
a = String(a);
console.log(typeof a); //string
console.log(a); // "123"

var a = true;
a = String(a);
console.log(typeof a); //string
console.log(a); // "true"

var a = null;
a = String(a);
console.log(typeof a); //string
console.log(a); // "null"

var a = undefined;
a = String(a);
console.log(typeof a); //string
console.log(a); // "undefined"
```