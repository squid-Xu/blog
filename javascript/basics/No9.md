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

## 将其他的数据类型转换为Number

### 方式一

- 使用 `Number()` 函数

- 字符串 --->  数字

> 1、如果是纯数字的字符串,则直接将其转换为数字

> 2、如果字符中有非数字的内容，则转换为 `NaN`

> 3、如果字符串是一个空串，或者是一个全是空格的字符串，则转换为 `0`

- 布尔  --->  数字

> `true` 转 `1`

> `false` 转 `0`

- null   --->  数字

> `null` 转 `0`

- undefined   --->  数字

> `undefined` 转 `NaN`

```js
var a = '123';
Number(a) //123

a = '123px'
Number(a) //NaN

a = ''
Number(a) //0

a = '    '
Number(a) //0

a = true
Number(a) //1

a = false
Number(a) //0

a = null
Number(a) //0

a = undefined
Number(a) //NaN
```


### 方式二

- 这种方式专门用来对付字符串

- `parseInt()` 把一个字符串转换为一个整数

> `parseInt()` 可以将一个字符串中的有效整数内容取出来，然后转换为 `Number`

- `parseFloat()` 把一个字符串转换为一个浮点数

> `parseFloat()` 作用和 `parseInt()` 类似，不同的是它可以获得有效的小数


> [!tip]
> 如果对非 `String` 使用 `parseInt()` 或 `parseFloat()`，它会先将其转换为 `String`，然后在操作


```js
var a = '123.56px';
parseInt(a) //123
parseFloat(a) //123.56

a = 'a123.56px';
parseInt(a) //NaN
parseFloat(a) //NaN

a = true;
parseInt(a) //NaN
parseFloat(a) //NaN

a = 'true';
parseInt(a) //NaN
parseFloat(a) //NaN
```