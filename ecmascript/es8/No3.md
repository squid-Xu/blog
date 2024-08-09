# Object.getOwnPropertyDescriptors

- 用于获取一个对象的所有属性的详细信息，包括属性的特性（例如可写、可枚举、可配置）以及属性的值。

```js
//声明对象
const obj = {
    name: 'squid-Xu',
    enjoys: ['游泳', '羽毛球'],
};

console.log(Object.getOwnPropertyDescriptors(obj)); // {name: {…}, enjoys: {…}}
// enjoys: {value: Array(2), writable: true, enumerable: true, configurable: true}
// name: {value: 'squid-Xu', writable: true, enumerable: true, configurable: true}
```
