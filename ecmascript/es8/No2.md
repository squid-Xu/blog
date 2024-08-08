# 对象方法扩展


## 0bject.values、Object.keys、Object.entries


```js
//声明对象
const obj = {
    name: 'squid-Xu',
    enjoys: ['游泳', '羽毛球'],
};

// 获取对象的所有键
console.log(Object.keys(obj)); //['name', 'enjoys']

// 获取对象的所有值
console.log(Object.values(obj)); // ['squid-Xu', ['游泳', '羽毛球']]

// 获取对象的所有键值对
console.log(Object.entries(obj)); // [['name', 'squid-Xu'],['enjoys', ['游泳', '羽毛球']]]

// 创建Map

const m = new Map(Object.entries(obj));

console.log(m); // Map(2) {'name' => 'squid-Xu', 'enjoys' => ['游泳', '羽毛球']}
```

## Object.getOwnPropertyDescriptors

- 该方法返回指定对象所有自身属性的描述对象:

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

```js
```