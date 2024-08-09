# String.prototype.replaceAll

- 相比于 `String.prototype.replace`，如果不使用全局正则表达式，就无法替换字符串中子字符串的所有实例。只会替换第一次匹配的字符。

```js
let str = 'hello world';
console.log(str.replace('l', '')); //helo world
console.log(str.replaceAll('l', '')); //heo word
```
