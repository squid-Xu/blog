# Object.values/Object.entries


- `Object.values：`把字典里的值都拿出来，就像拿出一个个水果。

- `Object.entries`：把字典里的值和对应的名字都拿出来，就像知道每个水果的名字和样子。


```js
//声明对象
const obj = {
    name: 'squid-Xu',
    enjoys: ['游泳', '羽毛球'],
};

// 获取对象的所有值
console.log(Object.values(obj)); // ['squid-Xu', ['游泳', '羽毛球']]

// 获取对象的所有键值对
console.log(Object.entries(obj)); // [['name', 'squid-Xu'],['enjoys', ['游泳', '羽毛球']]]

```