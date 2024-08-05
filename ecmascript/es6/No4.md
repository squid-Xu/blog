# 模版字符串

## 作用
- ES6引入新的声明字符串的方式 ` `` `  `''`  `""`

## 特点

- 声明

```js
let a = `我是字符串`;
```

- 内容中可以直接出现换行符

```js
let str = `<ul>
            <li>郑州</li>
            <li>信阳</li>
            </ul>`;
```

- 变量拼接

```js
let hn = '河南';
let zz = `${hn}的省会是郑州`;
console.log(zz); //河南的省会是郑州
```