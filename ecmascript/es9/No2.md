# 正则扩展


## 命名捕获分组（Regular Expression Named Capture Groups）

- 之前的做法

```js
// 声明一个字符串
let str = '<a href="https://squid-xu.github.io/blog/">squid-Xu</a>';

// 提取 url 与 标签文本
const reg = /<a href="(.*)">(.*)<\/a>/;
//执行
const result = reg.exec(str);

console.log(result[1]); //https://squid-xu.github.io/blog/
console.log(result[2]); //squid-Xu
```
- 新方法

```js
// 声明一个字符串
let str = '<a href="https://squid-xu.github.io/blog/">squid-Xu</a>';

const reg = /<a href="(?<url>.*)">(?<text>.*)<\/a>/;
const result = reg.exec(str);
console.log(result.groups); //{url: 'https://squid-xu.github.io/blog/', text: 'squid-Xu'}
```

## 反向断言（lookbehind）


```js
// 声明一个字符串
let str = 'AJ238298392一二三四888六六六';

// 正向断言
// const reg = /\d+(?=六)/;
// const result = reg.exec(str);
// console.log(result[0]); //888

// 反向断言
const reg = /(?<=四)\d+/;
const result = reg.exec(str);
console.log(result[0]); //888
```

